import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/shared/models';
import { AppState, selectAllAppointments } from 'src/app/state/reducers';

@Component({
  selector: 'app-current-appointments-card',
  templateUrl: './current-appointments-card.component.html',
  styleUrls: ['./current-appointments-card.component.css']
})
export class CurrentAppointmentsCardComponent implements OnInit {
  appointment$: Observable<Appointment[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.appointment$ = this.store.pipe(select(selectAllAppointments));
    this.appointment$.subscribe(x => console.log(x));
  }

}
