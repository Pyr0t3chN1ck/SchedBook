import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AngularMaterialModule } from '../shared/modules/angular-material/angular-material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  exports: [
    CommonModule,
    AngularMaterialModule,
    HeaderComponent,
    FooterComponent]
})
export class CoreModule { }
