import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressBookComponent } from './modules/address-book/address-book.component';
import { BookingComponent } from './modules/booking/booking.component';
import { ConfigurationPageComponent } from './modules/configuration-page/configuration-page.component';


const routes: Routes = [
  {
    path: 'booking',
    component: BookingComponent
  },
  {
    path: 'clients',
    component: AddressBookComponent
  },
  {
    path: 'configuration',
    component: ConfigurationPageComponent
  },
  {
    path: '**',
    redirectTo: 'booking'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
