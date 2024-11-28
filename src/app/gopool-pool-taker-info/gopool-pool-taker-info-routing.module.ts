import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GopoolPoolTakerInfoPage } from './gopool-pool-taker-info.page';

const routes: Routes = [
  {
    path: '',
    component: GopoolPoolTakerInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GopoolPoolTakerInfoPageRoutingModule {}
