import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 productArray= [
  {'id':1,'name':'keys'},
  {'id':2,'name':'watch'},
  {'id':3,'name':'chocolate'},
  {'id':4,'name':'bag'},
  {'id':5,'name':'pizza'}]


  constructor() { }

  ngOnInit(): void {
  }

}
