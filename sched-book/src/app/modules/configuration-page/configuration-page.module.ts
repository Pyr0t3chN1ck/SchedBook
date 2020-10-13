import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationPageComponent } from './configuration-page.component';
import { NailServicesConfigurationComponent } from './nail-services-configuration/nail-services-configuration.component';
import { AngularMaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NailServiceFormComponent } from './nail-service-form/nail-service-form.component';
import { EmployeeConfigurationComponent } from './employee-configuration/employee-configuration.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';



@NgModule({
  declarations: [ConfigurationPageComponent, NailServicesConfigurationComponent, NailServiceFormComponent, EmployeeConfigurationComponent, EmployeeFormComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ConfigurationPageComponent]
})
export class ConfigurationPageModule { }
