import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ExampleDatabase, ExampleDataSource } from './helpers.data';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpdataService} from 'app/services/http-request.service';

import { processednamesComponent } from './processednames.component';

describe('processednamesComponent', () => {
  let component: processednamesComponent;
  let fixture: ComponentFixture<blocksfoundComponent>;
  let test_data: any[] = [
    { id: "1", name: 'xcashfoundation', action: "register", amount: "0", timestamp: "1651603522" },
    { id: "2", name: 'xcashfoundation', action: "renew", amount: "0", timestamp: "1651603522" }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ processednamesComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule,MatTableModule],
      providers: [ HttpdataService ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(processednamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    // check that all html components are created
    it('should create', () => expect(component).toBeTruthy());

    it('should create dash card one', () => expect(fixture.debugElement.nativeElement.querySelector('#dashcard1')).toBeTruthy());
    it('should set dash card ones title', () => expect(fixture.debugElement.nativeElement.querySelector('#dashcard1').dashData.title).toBe('PROCESSED NAMES'));
    it('should set dash card ones property to a number', () => expect(fixture.debugElement.nativeElement.querySelector('#dashcard1').dashData.number).toBe(0));

    it('should create dash card two', () => expect(fixture.debugElement.nativeElement.querySelector('#dashcard2')).toBeTruthy());
    it('should set dash card twos title', () => expect(fixture.debugElement.nativeElement.querySelector('#dashcard2').dashData.title).toBe('AMOUNT'));
    it('should set dash card twos property to a number', () => expect(fixture.debugElement.nativeElement.querySelector('#dashcard2').dashData.number).toBe(0));

    it('should create blocks_found table', () => expect(fixture.debugElement.nativeElement.querySelector('#processed_names_table')).toBeTruthy());

    // test the code
    it('should update processed_names table', () => {
      component.exampleDatabase = new ExampleDatabase();
      test_data.forEach((item) => component.exampleDatabase.addUser(item.id,item.name,item.action,item.amount,item.timestamp));
      component.dataSource = new ExampleDataSource(component.exampleDatabase);

      fixture.detectChanges();
      expect(fixture.debugElement.nativeElement.querySelector('#id1').textContent).toContain(test_data[0].id);
      expect(fixture.debugElement.nativeElement.querySelector('#name1').textContent).toContain(test_data[0].name);
      expect(fixture.debugElement.nativeElement.querySelector('#action1').textContent).toContain(test_data[0].action);
      expect(fixture.debugElement.nativeElement.querySelector('#amount1').textContent).toContain(test_data[0].amount);
      expect(fixture.debugElement.nativeElement.querySelector('#timestamp1').textContent).toContain(test_data[0].timestamp);

      expect(fixture.debugElement.nativeElement.querySelector('#id2').textContent).toContain(test_data[1].id);
      expect(fixture.debugElement.nativeElement.querySelector('#name2').textContent).toContain(test_data[1].name);
      expect(fixture.debugElement.nativeElement.querySelector('#action2').textContent).toContain(test_data[1].action);
      expect(fixture.debugElement.nativeElement.querySelector('#amount2').textContent).toContain(test_data[1].amount);
      expect(fixture.debugElement.nativeElement.querySelector('#timestamp2').textContent).toContain(test_data[0].timestamp);
      });
});
