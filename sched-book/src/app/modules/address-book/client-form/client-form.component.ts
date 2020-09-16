import { Component, OnInit, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  constructor(private dialogRef: MatDialogRef<ClientFormComponent>, private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: Client) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    if (this.data) {
      const selectedClient = this.data;
      const formPhoneNumber = new PhoneNumber(
        this.data.phoneNumber.substr(0, 3),
        this.data.phoneNumber.substr(3, 3),
        this.data.phoneNumber.substr(6, 4)
      );
      this.clientForm.patchValue({
        firstName: selectedClient.firstName,
        lastName: selectedClient.lastName,
        address: selectedClient.address,
        phoneNumber: formPhoneNumber,
        email: selectedClient.email,
        dateOfBirth: selectedClient.dateOfBirth,
        preferredBrands: selectedClient.brandPreference,
        preferredColors: selectedClient.colorPreference,
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.clientForm.valid) {
      const phoneNumberObject = this.clientForm.controls.phoneNumber.value as PhoneNumber;
      const clientFormObject = this.clientForm.value as Client;
      clientFormObject.phoneNumber = phoneNumberObject.area + phoneNumberObject.exchange + phoneNumberObject.subscriber;
      clientFormObject.id = this.data?.id;
      this.save.emit(clientFormObject);
      this.dialogRef.close();
    }
  }
}
