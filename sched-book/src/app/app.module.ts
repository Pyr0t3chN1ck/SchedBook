import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigurationPageModule } from './modules/configuration-page/configuration-page.module';
import { AddressBookModule } from './modules/address-book/address-book.module';
import { BookingModule } from './modules/booking/booking.module';
import { AngularMaterialModule } from './shared/modules/angular-material/angular-material.module';
import { SidenavComponent } from './modules/navigation/sidenav/sidenav.component';
import { BookingComponent } from './modules/booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    ConfigurationPageModule,
    AddressBookModule,
    BookingModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
