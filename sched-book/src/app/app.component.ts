import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadEmployees } from './state/actions/employees.actions';
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
  }
}
