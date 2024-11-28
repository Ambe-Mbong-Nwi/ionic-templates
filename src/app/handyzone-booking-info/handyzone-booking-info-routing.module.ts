import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandyzoneBookingInfoPage } from './handyzone-booking-info.page';

const routes: Routes = [
  {
    path: '',
    component: HandyzoneBookingInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HandyzoneBookingInfoPageRoutingModule {}
