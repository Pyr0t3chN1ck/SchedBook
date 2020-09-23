import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { BookingComponent } from './booking.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';



@NgModule({
  declarations: [BookingComponent, AppointmentFormComponent,],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedComponentsModule
  ],
  exports: [BookingComponent]
})
export class BookingModule { }
