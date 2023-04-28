import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  public url = 'http://localhost:3000/customer';
  constructor(private httpClient: HttpClient) {}
  //to get data from json
  getCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.url);
  } 
  //to delete data from table
  deleteCustomer(id:number):Observable<Customer[]>{
    return this.httpClient.delete<Customer[]>(`this.url${id}`);
  } 
}
