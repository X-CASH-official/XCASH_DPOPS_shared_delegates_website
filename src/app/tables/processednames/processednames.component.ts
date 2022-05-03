import {fromEvent as observableFromEvent } from 'rxjs';
import {distinctUntilChanged, debounceTime} from 'rxjs/operators';

import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { ExampleDatabase, ExampleDataSource } from './helpers.data';
import {HttpdataService} from '../../services/http-request.service';
import Swal from 'sweetalert2';

import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-fixed-table',
  templateUrl: './processednames.component.html',
  styleUrls: ['./processednames.component.scss']
})

export class ProcessednamesComponent implements OnInit {

  public dashCard = [
      { ogmeter: true,  width_icon: 20, text_size: 40, text: 0, suffix: '', title: 'PROCESSED NAMES', icon: 'find_in_page' },
      { ogmeter: true,  width_icon: 20, text_size: 40, text: 0, suffix: '', title: 'AMOUNT', icon: 'published_with_changes' }
  ];

  total_processed_names:any = 0;
  total_amount:number = 0;
  length:number;

  public displayedColumns = ['ID', 'Name', 'Action', 'Amount', 'Timestamp'];
	public exampleDatabase = new ExampleDatabase();
	public dataSource: ExampleDataSource | null;
	public showFilterTableCode;

	constructor(private httpdataservice: HttpdataService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	@ViewChild('filter') filter: ElementRef;

	ngOnInit() {
    // get the data
    this.httpdataservice.get_request(this.httpdataservice.POOL_GET_PROCESSED_NAMES + "?start=1&amount=all").subscribe(
  	  (res) =>
  	  {
        this.exampleDatabase = new ExampleDatabase();
        var block_data = JSON.parse(JSON.stringify(res));
        var count;
        var amount;

        this.total_processed_names = block_data.length;

        for (count = 0; count < block_data.length; count++) {
          amount = parseInt(block_data[count].amount) / this.httpdataservice.XCASH_WALLET_DECIMAL_PLACES_AMOUNT;
          this.total_amount += amount;
  	      this.exampleDatabase.addUser((count + 1).toString(),block_data[count].name.toString(),block_data[count].action.toString(),amount.toString(),(parseInt(block_data[count].timestamp) * 1000).toString());
  	    }

        this.dashCard[0].text = block_data.length;
        this.dashCard[1].text = this.total_amount;
  	    //this.dataSource = new ExampleDataSource(this.exampleDatabase);
        this.length =  block_data.length;
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);

        //console.log(this.dataSource);
        observableFromEvent(this.filter.nativeElement, 'keyup').pipe(
          debounceTime(150),
          distinctUntilChanged()
        ).subscribe(() => {
            if (!this.dataSource) { return; }
            this.dataSource.filter = this.filter.nativeElement.value;
          }
        );
},
      (error) => {
        Swal.fire("Error","An error has occured","error");
      }
    );
  }
}
