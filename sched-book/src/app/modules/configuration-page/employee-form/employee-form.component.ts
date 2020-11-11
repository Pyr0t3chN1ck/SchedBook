import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Employee } from 'src/app/shared/models';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit, OnChanges {
  employeeForm = this.formBuilder.group({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
  });
  @Input() currentEmployee: Employee;
  @Input() isAddEmployeeForm = false;
  @Output() saveEmployee = new EventEmitter<Employee>();
  @Output() deleteEmployee = new EventEmitter<Employee>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.currentEmployee) {
      this.employeeForm.controls.firstName.patchValue(this.currentEmployee.firstName);
      this.employeeForm.controls.lastName.patchValue(this.currentEmployee.lastName);
    }
  }

  onSave(): void {
    if (this.employeeForm.valid) {
      const employeeFormObject = this.employeeForm.value as Employee;
      this.employeeForm.reset();
      this.saveEmployee.emit(employeeFormObject);
    }
  }

  onDelete(): void {
    this.employeeForm.reset();
    this.deleteEmployee.emit(this.currentEmployee);
  }

}
