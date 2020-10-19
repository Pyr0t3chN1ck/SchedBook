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
import { StoreModule } from '@ngrx/store';
import { reducers } from './state/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { EmployeesEffects } from './state/effects/employees.effects';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    ConfigurationPageModule,
    AddressBookModule,
    BookingModule,
    AngularMaterialModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([EmployeesEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
