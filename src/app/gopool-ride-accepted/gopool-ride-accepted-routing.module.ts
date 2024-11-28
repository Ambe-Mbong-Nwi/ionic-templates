import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GopoolRideAcceptedPage } from './gopool-ride-accepted.page';

const routes: Routes = [
  {
    path: '',
    component: GopoolRideAcceptedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GopoolRideAcceptedPageRoutingModule {}
