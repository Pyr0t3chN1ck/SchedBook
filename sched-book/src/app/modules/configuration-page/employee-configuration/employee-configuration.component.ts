import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { Employee } from 'src/app/shared/models';

@Component({
  selector: 'app-employee-configuration',
  templateUrl: './employee-configuration.component.html',
  styleUrls: ['./employee-configuration.component.css']
})
export class EmployeeConfigurationComponent implements OnInit {
  employees: Employee[] = [

  ];
  @ViewChild('employeeListEl') employeeListEl: MatSelectionList;
  selectedEmployee: Employee = null;
  showAddEmployeeForm = false;

  constructor() { }

  ngOnInit(): void {
  }

  selectEmployee() {
    this.selectedEmployee = this.employees[this.employeeListEl.selectedOptions.selected[0].value];
  }

  deleteEmployee(deletedEmployee: Employee): void {
    this.employees = this.employees.filter(emp => emp.id !== deletedEmployee.id);
    this.selectedEmployee = null;
    this.employeeListEl.selectedOptions.clear();
    console.log('Deleted Employee!');
  }

  saveEmployeeEdit(editedEmployee: Employee): void {
    editedEmployee.id = this.selectedEmployee.id;
    this.employees[this.employees.findIndex(emp => emp.id === this.selectedEmployee.id)] = editedEmployee;
    this.selectedEmployee = null;
    this.employeeListEl.selectedOptions.clear();
    console.log('Edited Employee!');
  }

  openAddEmployeeForm() {
    this.showAddEmployeeForm = true;
    this.selectedEmployee = null;
    this.employeeListEl.selectedOptions.clear();
  }

  addEmployee(newEmployee: Employee) {
    this.employees.unshift(newEmployee);
    this.showAddEmployeeForm = false;
    console.log('Added Employee!');
  }
}
