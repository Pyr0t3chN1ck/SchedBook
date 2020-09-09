import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactSearchComponent } from './contact-search/contact-search.component';
import { AddressBookComponent } from './address-book.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactFormComponent } from './contact-form/contact-form.component';

import { NumberOnlyDirective } from '../../shared/directives/shared-directives';
import { PhoneNumberInputComponent } from './phone-number-input/phone-number-input.component';

@NgModule({
  declarations: [ContactSearchComponent, AddressBookComponent, ContactFormComponent, NumberOnlyDirective, PhoneNumberInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatDialogModule,
  ],
  exports: [AddressBookComponent, NumberOnlyDirective]
})

export class AddressBookModule { }
