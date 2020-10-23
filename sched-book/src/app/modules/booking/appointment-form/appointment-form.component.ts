import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Client, NailService, PhoneNumber, Appointment, Employee } from 'src/app/shared/models';
import { AppState, selectAllCurrentEmployees } from 'src/app/state/reducers';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {
  subscriptions = new Subscription();
  clients: Client[] = [
    {
      id: '1', firstName: 'John', lastName: 'Smith', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
      email: 'testmail@email.com', dateOfBirth: new Date(), brandPreference: '', colorPreference: '', notes: '', isDeleted: false
    },
    {
      id: '2', firstName: 'Jane', lastName: 'Doe', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
      email: 'testmail@email.com', dateOfBirth: new Date(), brandPreference: '', colorPreference: '', notes: '', isDeleted: false
    },
    {
      id: '3', firstName: 'Orlando', lastName: 'Bloom', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
      email: 'testmail@email.com', dateOfBirth: new Date(), brandPreference: '', colorPreference: '', notes: '', isDeleted: false
    },
    {
      id: '4', firstName: 'Chris', lastName: 'Evans', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
      email: 'testmail@email.com', dateOfBirth: new Date(), brandPreference: '', colorPreference: '', notes: '', isDeleted: false
    },
    {
      id: '5', firstName: 'Clark', lastName: 'Kent', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
      email: 'testmail@email.com', dateOfBirth: new Date(), brandPreference: '', colorPreference: '', notes: '', isDeleted: false
    },
    {
      id: '6', firstName: 'Peter', lastName: 'Parker', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
      email: 'testmail@email.com', dateOfBirth: new Date(), brandPreference: '', colorPreference: '', notes: '', isDeleted: false
    },
    {
      id: '7', firstName: 'Bruce', lastName: 'Wayne', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
      email: 'testmail@email.com', dateOfBirth: new Date(), brandPreference: '', colorPreference: '', notes: '', isDeleted: false
    },
  ];
  employees$: Observable<Employee[]>;
  nailServices: NailService[] = [
    { id: '1', name: 'Manicure', price: 20.00, isDeleted: false },
    { id: '2', name: 'Pedicure', price: 27.00, isDeleted: false },
    { id: '3', name: 'Acrylics', price: 35.00, isDeleted: false },
  ];

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

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.appointmentForm.controls.existingClient.disable();
    this.appointmentForm.controls.newClientName.enable();
    this.appointmentForm.controls.newClientPhoneNumber.enable();
    this.employees$ = this.store.pipe(select(selectAllCurrentEmployees));
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
      clientId = this.clients[formControls.existingClient.value].id;
      clientName = this.clients[formControls.existingClient.value].firstName + ' '
        + this.clients[formControls.existingClient.value].lastName;
      clientPhoneNumber = this.clients[formControls.existingClient.value].phoneNumber;
    }

    this.subscriptions.add(
      this.employees$.subscribe(employees => {
        selectedEmployee = employees.find(emp => emp.id === formControls.assignedEmployee.value);
      })
    );

    const newAppt = {
      apptDate: formControls.apptDate.value,
      startTime,
      endTime,
      clientId,
      clientName,
      clientPhoneNumber,
      nailServices: formControls.nailServices.value.map(index => this.nailServices[index]),
      assignedEmployee: selectedEmployee,
      notes: formControls.notes.value
    } as Appointment;
    console.log(newAppt);
  }

}
