import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HungerzTableBookingPage } from './hungerz-table-booking.page';

const routes: Routes = [
  {
    path: '',
    component: HungerzTableBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HungerzTableBookingPageRoutingModule {}
