import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandyzoneMyBookingsPage } from './handyzone-my-bookings.page';

const routes: Routes = [
  {
    path: '',
    component: HandyzoneMyBookingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HandyzoneMyBookingsPageRoutingModule {}
