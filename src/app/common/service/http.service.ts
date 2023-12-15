import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private httpClient: HttpClient) {}

  postMethod(url? : string,data?: any){
      return this.httpClient.post(`${url}`,data);
  }
  getMethod(url?: string){
    return this.httpClient.get(`${url}`);
  }
  getJsonMessage(url:string){
    return this.httpClient.get('./assets/' + url);
  }
}

