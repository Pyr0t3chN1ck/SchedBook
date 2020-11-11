import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Employee } from 'src/app/shared/models';
import { createEmployee, markEmployeeDeleted, updateEmployee } from 'src/app/state/actions/employees.actions';
import { AppState, selectAllCurrentEmployees } from 'src/app/state/reducers';

@Component({
  selector: 'app-employee-configuration',
  templateUrl: './employee-configuration.component.html',
  styleUrls: ['./employee-configuration.component.css']
})
export class EmployeeConfigurationComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription();
  employees$: Observable<Employee[]>;
  @ViewChild('employeeListEl') employeeListEl: MatSelectionList;
  selectedEmployee: Employee = null;
  showAddEmployeeForm = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.employees$ = this.store.pipe(select(selectAllCurrentEmployees));
  }

  selectEmployee(): void {
    this.subscriptions.add(
      this.employees$.subscribe(employees => {
        this.selectedEmployee = employees.find(emp => emp.id === this.employeeListEl.selectedOptions.selected[0].value);
      })
    );
  }

  deleteEmployee(deletedEmployee: Employee): void {
    this.selectedEmployee = null;
    this.employeeListEl.selectedOptions.clear();
    this.store.dispatch(markEmployeeDeleted({ id: deletedEmployee.id }));
  }

  saveEmployeeEdit(editedEmployee: Employee): void {
    editedEmployee.id = this.selectedEmployee.id;
    const payload = {
      ...editedEmployee,
      oldValues: {
        firstName: this.selectedEmployee.firstName,
        lastName: this.selectedEmployee.lastName
      }
    };
    this.selectedEmployee = null;
    this.employeeListEl.selectedOptions.clear();
    this.store.dispatch(updateEmployee({ payload }));
  }

  openAddEmployeeForm(): void {
    this.showAddEmployeeForm = true;
    this.selectedEmployee = null;
    this.employeeListEl.selectedOptions.clear();
  }

  addEmployee(newEmployee: Employee): void {
    this.showAddEmployeeForm = false;
    this.store.dispatch(createEmployee({ firstName: newEmployee.firstName, lastName: newEmployee.lastName }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
