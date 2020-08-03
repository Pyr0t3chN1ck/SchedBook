import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { BookingComponent } from './booking/booking.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';

export { BookingComponent } from './booking/booking.component'



@NgModule({
  declarations: [
    BookingComponent, 
    AppointmentFormComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [BookingComponent]
})
export class BookingModule { }
