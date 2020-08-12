import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactSearchComponent } from './contact-search/contact-search.component';
import { AddressBookComponent } from './address-book/address-book.component';

import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [ContactSearchComponent, AddressBookComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [AddressBookComponent]
})



export class AddressBookModule { }
