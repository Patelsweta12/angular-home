import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(private httpClient:HttpClient) { }


  public url="http://localhost:3000/customer"

  getCustomer():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>('url')
  }
}
