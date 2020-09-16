import { Component, OnInit, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PhoneNumber } from '../phone-number-input/phone-number-input.component';
import { Client } from 'src/app/shared/models';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  clientForm = this.formBuilder.group({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl(''),
    address: new FormControl(''),
    phoneNumber: new FormControl(new PhoneNumber('', '', '')),
    email: new FormControl('', [Validators.email]),
    dateOfBirth: new FormControl(),
    preferredBrands: new FormControl(''),
    preferredColors: new FormControl(''),
  });
  save = new EventEmitter<Client>();

  constructor(private dialogRef: MatDialogRef<ClientFormComponent>, private formBuilder: FormBuilder) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.clientForm.valid) {
      const phoneNumberObject = this.clientForm.controls.phoneNumber.value as PhoneNumber;
      const clientFormObject = this.clientForm.value as Client;
      clientFormObject.phoneNumber = phoneNumberObject.area + phoneNumberObject.exchange + phoneNumberObject.subscriber;
      this.save.emit(clientFormObject);
      this.dialogRef.close();
    }
  }
}
