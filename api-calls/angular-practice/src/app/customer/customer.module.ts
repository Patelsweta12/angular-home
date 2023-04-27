import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerListComponent,
    AddCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NgSelectModule,
    FormsModule
  ]
})
export class CustomerModule { }
