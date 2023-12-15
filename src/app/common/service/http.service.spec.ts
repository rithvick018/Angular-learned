import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';


class mockHttpClient{
  post(){

  }
  get(){

  }
}
describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide:HttpClient, useClass:mockHttpClient}
      ]
    });
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call postMethod', () => {
    service.postMethod();
    expect(service.postMethod).toBeDefined();
  });
  it('should call getMethod', () => {
    service.getMethod();
    expect(service.getMethod).toBeDefined();
  });
  it('should call getJsonMessage', () => {
    service.getJsonMessage('');
    expect(service.getJsonMessage).toBeDefined();
  });
});
