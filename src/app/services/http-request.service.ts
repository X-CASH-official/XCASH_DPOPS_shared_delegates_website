import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import { environment } from './../../environments/environment';

@Injectable()
export class HttpdataService{
  constructor(private httpClient: HttpClient) {}


  POOL_GET_STATISTICS:string = environment.node_apiEndPoint + "/shareddelegateswebsitegetstatistics";
  POOL_GET_BLOCKS_FOUND:string = environment.node_apiEndPoint + "/getblocksfound";
  POOL_GET_PROCESSED_NAMES:string = environment.node_apiEndPoint + "/getremotedataprocessednames";
  POOL_GET_PUBLIC_ADDRESS_INFORMATION:string = environment.node_apiEndPoint + "/getpublicaddressinformation";
  POOL_GET_DELEGATES_VOTERS_LIST:string = environment.node_apiEndPoint + "/getdelegatesvoterslist";
  POOL_GET_PUBLIC_ADDRESS_PAYMENT_INFORMATION:string = environment.node_apiEndPoint + "/getpublicaddresspaymentinformation";

  EXPLORER_GET_DELEGATES_STATISTICS:string =  environment.explorer_apiEndPoint + "/getdelegatesstatistics";
  EXPLORER_GET_DELEGATE_WEBSITE_STATISTICS:string =  environment.explorer_apiEndPoint + "/delegateswebsitegetstatistics";

  XCASH_WALLET_DECIMAL_PLACES_AMOUNT:number = 1000000;
  BLOCK_TIME:number = 5;
  Timer:any;

  sleep(milliseconds)
  {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  get_request(url:string)
  {
    return this.httpClient.get(url);
  }

  post_request(url:string, data:string)
  {
    const headers = new HttpHeaders ({'Content-Type':'application/x-www-form-urlencoded'});
    return this.httpClient.post(url,data, {headers: headers});
  }

  post_request_json(item: any[])
  {
    const headers = new HttpHeaders ({'Content-Type':'application/json'});
    return this.httpClient.post('url',item, {headers: headers});
  }

}
