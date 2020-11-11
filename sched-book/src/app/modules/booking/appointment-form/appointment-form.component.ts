import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { Client, NailService, PhoneNumber, Employee, AppointmentCreatePayload } from 'src/app/shared/models';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { createAppointment } from 'src/app/state/actions/appointments.actions';
import { AppState, selectAllCurrentClients, selectAllCurrentEmployees, selectAllCurrentNailServices } from 'src/app/state/reducers';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription();
  clients$: Observable<Client[]>;
  employees$: Observable<Employee[]>;
  nailServices$: Observable<NailService[]>;

  appointmentForm = this.formBuilder.group({
    apptDate: new FormControl(new Date(), [Validators.required]),
    startTime: new FormControl(this.roundMinutes(new Date()), [Validators.required]),
    endTime: new FormControl(this.roundMinutes(new Date(new Date().setHours(new Date().getHours() + 1))), [Validators.required]),
    clientType: new FormControl('new'),
    newClientName: new FormControl('', [this.requiredIfValidator(() =>
      this.appointmentForm.controls.clientType.valueChanges.subscribe(value => value === 'new' ? true : false))]),
    newClientPhoneNumber: new FormControl(new PhoneNumber('', '', ''), [this.requiredIfValidator(() =>
      this.appointmentForm.controls.clientType.valueChanges.subscribe(value => value === 'new' ? true : false))]),
    existingClient: new FormControl('', [this.requiredIfValidator(() =>
      this.appointmentForm.controls.clientType.valueChanges.subscribe(value => value === 'existing' ? true : false))]),
    nailServices: new FormControl([]),
    assignedEmployee: new FormControl('', [Validators.required]),
    notes: new FormControl('')
  });
  minEndTime = this.roundMinutes(new Date());

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.appointmentForm.controls.existingClient.disable();
    this.appointmentForm.controls.newClientName.enable();
    this.appointmentForm.controls.newClientPhoneNumber.enable();

    // this.employeeService.getEmployees().subscribe(data => {
    //   this.employees = data.map(employee => {
    //     return {
    //       id: employee.payload.doc.id,
    //       ...employee.payload.doc.data() as any
    //     } as Employee;
    //   });
    // });
    this.employees$ = this.store.pipe(select(selectAllCurrentEmployees));
    this.clients$ = this.store.pipe(select(selectAllCurrentClients));
    this.nailServices$ = this.store.pipe(select(selectAllCurrentNailServices));
  }

  requiredIfValidator(predicate): ValidatorFn {
    return (formControl => {
      if (!formControl.parent) {
        return null;
      }
      if (predicate()) {
        return Validators.required(formControl);
      }
      return null;
    });
  }

  roundMinutes(originalDate: Date): Date {
    const coeff = 1000 * 60 * 10;
    return new Date(Math.ceil(originalDate.getTime() / coeff) * coeff);
  }

  onStartTimeChange(event): void {
    this.minEndTime = event.value;
  }

  onClientTypeChange(event: MatRadioChange): void {
    if (event.value === 'new') {
      this.appointmentForm.controls.existingClient.disable();
      this.appointmentForm.controls.newClientName.enable();
      this.appointmentForm.controls.newClientPhoneNumber.enable();
    } else {
      this.appointmentForm.controls.existingClient.enable();
      this.appointmentForm.controls.newClientName.disable();
      this.appointmentForm.controls.newClientPhoneNumber.disable();
    }
  }

  onSave(): void {
    const formControls = this.appointmentForm.controls;
    let clientId = '-1';
    let clientName = '';
    let clientPhoneNumber = '';
    let selectedEmployee: Employee;
    let selectedNailServices: NailService[];
    const apptDate = formControls.apptDate.value as Date;
    const startTime = formControls.startTime.value as Date;
    const endTime = formControls.endTime.value as Date;

    startTime.setDate(apptDate.getDate());
    startTime.setMonth(apptDate.getMonth());
    startTime.setFullYear(apptDate.getFullYear());
    endTime.setDate(apptDate.getDate());
    endTime.setMonth(apptDate.getMonth());
    endTime.setFullYear(apptDate.getFullYear());


    if (formControls.clientType.value === 'new') {
      const phoneNumberObj = formControls.newClientPhoneNumber.value as PhoneNumber;
      clientName = formControls.newClientName.value;
      clientPhoneNumber = phoneNumberObj.area + phoneNumberObj.exchange + phoneNumberObj.subscriber;
    }
    else if (formControls.clientType.value === 'existing') {
      let selectedClient: Client;
      this.subscriptions.add(this.clients$.subscribe(clients => {
        selectedClient = clients.find(client => client.id === formControls.existingClient.value);
      }));
      clientId = selectedClient.id;
      clientName = selectedClient.firstName + ' '
        + selectedClient.lastName;
      clientPhoneNumber = selectedClient.phoneNumber;
    }

    this.subscriptions.add(
      this.employees$.subscribe(employees => {
        selectedEmployee = employees.find(emp => emp.id === formControls.assignedEmployee.value);
      })
    );

    this.subscriptions.add(
      this.nailServices$.subscribe(nailServices => {
        selectedNailServices = formControls.nailServices.value.map(id => nailServices.find(ns => ns.id === id));
      })
    );

    const newAppt = {
      apptDate: formControls.apptDate.value,
      startTime,
      endTime,
      clientId,
      clientName,
      clientPhoneNumber,
      nailServices: selectedNailServices.map(ns => ns.id),
      assignedEmployee: selectedEmployee.id,
      notes: formControls.notes.value
    } as AppointmentCreatePayload;
    this.store.dispatch(createAppointment(newAppt));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
