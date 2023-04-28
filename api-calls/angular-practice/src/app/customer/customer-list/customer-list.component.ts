import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  selectedCar: number=0;
  customerData:any

    status = [
      { id: 0, name: 'All'},
        { id: 1, name: 'Open'},
        { id: 2, name: 'Error'},
        { id: 3, name: 'Inactive'},
        { id: 4, name: 'sucess'},
    ];

  constructor(private cusomerService:CustomerService) { }

  ngOnInit(): void {
    this.getCustomerData();
  }
  getCustomerData(){
    this.cusomerService.getCustomer().subscribe((res:Customer[]) => this.customerData = res)
  }
  deleteCustomerData(id:number){
    this.cusomerService.deleteCustomer(id).subscribe()
  }
}
