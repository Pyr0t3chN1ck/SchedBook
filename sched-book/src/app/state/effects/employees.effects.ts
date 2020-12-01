import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import * as employeeActions from '../actions/employees.actions';
import { EmployeeEntity } from '../reducers/employees.reducer';


@Injectable()
export class EmployeesEffects {

  constructor(private actions$: Actions, private service: EmployeeService) { }

  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(employeeActions.loadEmployees),
      switchMap(() => this.service.getEmployees()
        .pipe(
          map(results => employeeActions.loadEmployeesSucceess({
            payload: results.map(emp => {
              return {
                id: emp.payload.doc.id,
                ...emp.payload.doc.data() as any
              } as EmployeeEntity;
            })
          })),
          catchError(err => of(employeeActions.loadEmployeesFail({ message: 'There was an issue loading employees.' })))
        )
      )
    )
  );

  createEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(employeeActions.createEmployee),
      map(action => action.payload),
      switchMap((emp) => this.service.addEmployee(emp)
        .pipe(
          map((response) => employeeActions.createEmployeeSuccess({
            payload: {
              id: response.id,
              ...emp
            } as EmployeeEntity
          })),
          catchError(err => of(employeeActions.createEmployeeFail({ message: 'There was an issue creating employee.', payload: emp }))
          )
        )
      )
    )
  );

  deleteEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(employeeActions.markEmployeeDeleted),
      map(action => action.id),
      switchMap((id) => this.service.markEmployeeDeleted(id)
        .pipe(
          map(() => employeeActions.markEmployeeDeletedSuccess({ id })),
          catchError(err => of(employeeActions.markEmployeeDeletedFail({ message: 'There was an issue deleting employee.' })))
        )
      )
    )
  );

  updateEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(employeeActions.updateEmployee),
      map(action => action.payload),
      switchMap(emp => this.service.updateEmployee({ id: emp.id, firstName: emp.firstName, lastName: emp.lastName })
        .pipe(
          map(() => employeeActions.updateEmployeeSucceess({ payload: emp })),
          catchError(err => of(employeeActions.updateEmployeeFail({ message: 'There was an issue updating employee.', payload: emp })))
        )
      )
    )
  );
}
