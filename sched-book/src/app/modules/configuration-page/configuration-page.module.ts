import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationPageComponent } from './configuration-page.component';
import { NailServicesConfigurationComponent } from './nail-services-configuration/nail-services-configuration.component';



@NgModule({
  declarations: [ConfigurationPageComponent, NailServicesConfigurationComponent],
  imports: [
    CommonModule
  ],
  exports: [ConfigurationPageComponent]
})
export class ConfigurationPageModule { }
