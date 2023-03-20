import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeId:any;

  constructor(private routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeId=this.routes.snapshot.paramMap.get('id')
  }

}
