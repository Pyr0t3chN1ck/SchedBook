import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactSearchComponent } from './contact-search/contact-search.component';
import { AddressBookComponent } from './address-book.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PhoneNumberInputComponent } from './phone-number-input/phone-number-input.component';

import { NumberOnlyDirective } from '../../shared/directives/shared-directives';
import { AngularMaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';

@NgModule({
  declarations: [ContactSearchComponent, AddressBookComponent, ContactFormComponent, NumberOnlyDirective, PhoneNumberInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  exports: [AddressBookComponent, NumberOnlyDirective]
})

export class AddressBookModule { }
