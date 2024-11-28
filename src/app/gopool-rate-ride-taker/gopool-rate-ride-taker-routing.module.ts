import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GopoolRateRideTakerPage } from './gopool-rate-ride-taker.page';

const routes: Routes = [
  {
    path: '',
    component: GopoolRateRideTakerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GopoolRateRideTakerPageRoutingModule {}
