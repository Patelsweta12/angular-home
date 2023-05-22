import { Component } from '@angular/core';
import {NgbCalendar, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'book-seat';
  public name!: 'sweta';

  model!: NgbDateStruct;
content: any;
	constructor(private calendar: NgbCalendar ,private modalService: NgbModal) {}

	selectToday() {
		this.model = this.calendar.getToday();
	}
  openVerticallyCentered(content:any) {
		this.modalService.open(content, { centered: true });
	}
  
}

