import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { PhoneNumberInputComponent } from './phone-number-input/phone-number-input.component';

@NgModule({
  declarations: [PhoneNumberInputComponent],
  imports: [
    ReactiveFormsModule,
    SharedDirectivesModule,
  ],
  exports: [
    CommonModule,
    PhoneNumberInputComponent
  ],
})
export class SharedComponentsModule { }
