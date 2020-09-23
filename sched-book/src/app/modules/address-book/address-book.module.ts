import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientSearchComponent } from './client-search/client-search.component';
import { AddressBookComponent } from './address-book.component';
import { ClientFormComponent } from './client-form/client-form.component';

import { SharedDirectivesModule } from '../../shared/directives/shared-directives.module';
import { AngularMaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';
import { DeleteClientDialogComponent } from './delete-client-dialog/delete-client-dialog.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  declarations: [
    ClientSearchComponent,
    AddressBookComponent,
    ClientFormComponent,
    DeleteClientDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    SharedComponentsModule,
    SharedDirectivesModule,
  ],
  exports: [AddressBookComponent]
})

export class AddressBookModule { }
