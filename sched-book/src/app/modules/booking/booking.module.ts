import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { BookingComponent } from './booking.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BookingComponent, AppointmentFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    SharedComponentsModule,
    BrowserModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  exports: [BookingComponent]
})
export class BookingModule { }
