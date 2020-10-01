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
import { CalendarPageModule } from './modules/calendar-page/calendar-page.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    ConfigurationPageModule,
    AddressBookModule,
    BookingModule,
    CalendarPageModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
