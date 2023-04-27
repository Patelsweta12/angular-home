import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  selectedCar: number=0;
  customerData:any

    cars = [
      { id: 0, name: 'All' },
        { id: 1, name: 'Volvo' },
        { id: 2, name: 'Saab' },
        { id: 3, name: 'Opel' },
        { id: 4, name: 'Audi' },
    ];

  constructor(private cusomerService:CustomerService) { }

  ngOnInit(): void {
  }
  getCustomerData(){
    this.cusomerService.getCustomer().subscribe(res=>res=this.customerData)
  }
}
