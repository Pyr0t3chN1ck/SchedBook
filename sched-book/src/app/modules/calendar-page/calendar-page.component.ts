import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.css']
})
export class CalendarPageComponent implements OnInit {
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  scheduleView: CalendarView = CalendarView.Week;

  constructor() { }

  ngOnInit(): void {
  }

  get CalendarView() { return CalendarView; }

  changeScheduleView(event): void {
    this.scheduleView = event.value as CalendarView;
  }

}
