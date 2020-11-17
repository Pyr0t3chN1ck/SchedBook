import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadClients } from './state/actions/clients.actions';
import { loadEmployees } from './state/actions/employees.actions';
import { loadNailServices } from './state/actions/nail-services.actions';
import { AppState } from './state/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sidenavOpen = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadEmployees());
    this.store.dispatch(loadNailServices());
    this.store.dispatch(loadClients());
  }
}
