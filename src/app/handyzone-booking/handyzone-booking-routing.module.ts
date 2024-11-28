import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandyzoneBookingPage } from './handyzone-booking.page';

const routes: Routes = [
  {
    path: '',
    component: HandyzoneBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HandyzoneBookingPageRoutingModule {}
