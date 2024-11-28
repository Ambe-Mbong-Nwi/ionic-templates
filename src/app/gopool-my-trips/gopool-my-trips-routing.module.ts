import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GopoolMyTripsPage } from './gopool-my-trips.page';

const routes: Routes = [
  {
    path: '',
    component: GopoolMyTripsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GopoolMyTripsPageRoutingModule {}
