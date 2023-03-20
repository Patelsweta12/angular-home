import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';


  public randomString:any ="what a wonderful day";
  public today:number=  Date.now();
  public currency:number=25.67;
  public user={
    name:'sweta',
    age:23
  }


public filter:string='';
  tableHeaderArr=[
    {id:'id',name:'Name',address:'address'}
  ];

  tableBodyArr=[
    {id:1,name:'sweta',address:'valsad'},
    {id:2,name:'alay',address:'surat'},
    {id:3,name:'tejas',address:'chikhali'},
    {id:4,name:'harsh',address:'baroda'},
    {id:5,name:'namrata',address:'vapi'}
  ]

}
