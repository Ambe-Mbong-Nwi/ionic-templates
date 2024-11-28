import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GopoolRideRoutePage } from './gopool-ride-route.page';

const routes: Routes = [
  {
    path: '',
    component: GopoolRideRoutePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GopoolRideRoutePageRoutingModule {}
