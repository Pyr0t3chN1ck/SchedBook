import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarPageComponent } from './calendar-page.component';
import { CalendarModule } from 'angular-calendar';
import { AngularMaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';

@NgModule({
  declarations: [CalendarPageComponent],
  imports: [
    CommonModule,
    CalendarModule,
    AngularMaterialModule,
  ],
  exports: [CalendarPageComponent]
})
export class CalendarPageModule { }
