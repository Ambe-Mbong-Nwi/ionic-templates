import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GopoolPoolTakerRequestPage } from './gopool-pool-taker-request.page';

const routes: Routes = [
  {
    path: '',
    component: GopoolPoolTakerRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GopoolPoolTakerRequestPageRoutingModule {}
