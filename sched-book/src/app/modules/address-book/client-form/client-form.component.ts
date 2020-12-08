import { Component, OnInit, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Client, PhoneNumber } from 'src/app/shared/models';

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
    dateOfBirth: new FormControl(''),
    brandPreference: new FormControl(''),
    colorPreference: new FormControl(''),
    notes: new FormControl(''),
  });
  save = new EventEmitter<Client>();

  constructor(
    private dialogRef: MatDialogRef<ClientFormComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Client) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    if (this.data) {
      const selectedClient = this.data;
      const formPhoneNumber = selectedClient.phoneNumber && selectedClient.phoneNumber.length === 10 ? new PhoneNumber(
        selectedClient.phoneNumber.substr(0, 3),
        selectedClient.phoneNumber.substr(3, 3),
        selectedClient.phoneNumber.substr(6, 4)
      ) : '';
      this.clientForm.patchValue({
        firstName: selectedClient.firstName,
        lastName: selectedClient.lastName,
        address: selectedClient.address,
        phoneNumber: formPhoneNumber,
        email: selectedClient.email,
        brandPreference: selectedClient.brandPreference,
        colorPreference: selectedClient.colorPreference,
        notes: selectedClient.notes,
        dateOfBirth: selectedClient.dateOfBirth
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
