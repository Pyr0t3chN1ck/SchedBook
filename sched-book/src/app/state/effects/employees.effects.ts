import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import * as employeeActions from '../actions/employees.actions';
import { EmployeeEntity } from '../reducers/employees.reducer';


@Injectable()
export class EmployeesEffects {

  constructor(private actions$: Actions, private service: EmployeeService) { }

  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(employeeActions.loadEmployees),
      switchMap(() => this.service.getEmployees().pipe(
        map(results => employeeActions.loadEmployeesSucceess({
          payload: results.map(emp => {
            return {
              id: emp.payload.doc.id,
              ...emp.payload.doc.data() as any
            } as EmployeeEntity;
          })
        })),
        catchError(results => of(employeeActions.loadEmployeesFail({ message: 'There was an issue loading employees.' })))
      )
      )
    )
  );
}
