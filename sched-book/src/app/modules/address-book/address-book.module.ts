import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientSearchComponent } from './client-search/client-search.component';
import { AddressBookComponent } from './address-book.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { PhoneNumberInputComponent } from './phone-number-input/phone-number-input.component';

import { NumberOnlyDirective } from '../../shared/directives/shared-directives';
import { AngularMaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';
import { DeleteClientDialogComponent } from './delete-client-dialog/delete-client-dialog.component';

@NgModule({
  declarations: [
    ClientSearchComponent,
    AddressBookComponent,
    ClientFormComponent,
    NumberOnlyDirective,
    PhoneNumberInputComponent,
    DeleteClientDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  exports: [AddressBookComponent, NumberOnlyDirective]
})

export class AddressBookModule { }
