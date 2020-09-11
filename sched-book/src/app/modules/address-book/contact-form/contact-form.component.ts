import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PhoneNumber } from '../phone-number-input/phone-number-input.component';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm = this.formBuilder.group({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl(''),
    address: new FormControl(''),
    phoneNumber: new FormControl(new PhoneNumber('', '', '')),
    email: new FormControl('', [Validators.email]),
    dateOfBirth: new FormControl(new Date()),
    preferredBrands: new FormControl(''),
    preferredColors: new FormControl(''),
  });

  constructor(private dialogRef: MatDialogRef<ContactFormComponent>, private formBuilder: FormBuilder) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
}
