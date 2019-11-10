import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { cust } from './customers';


@Injectable({
  providedIn: 'root'
})
export class OperateDataService {
  public _serviceData;
  constructor(private http :HttpClient ) {     
  }

  getData(){
    this._serviceData = this.http.get<cust[]>('../assets/data/customers1.json');
    return this._serviceData;
  }
}
