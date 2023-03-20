import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductModule } from '../product/product.module';
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    ProductModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
