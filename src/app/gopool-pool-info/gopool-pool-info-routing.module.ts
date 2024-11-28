import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GopoolPoolInfoPage } from './gopool-pool-info.page';

const routes: Routes = [
  {
    path: '',
    component: GopoolPoolInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GopoolPoolInfoPageRoutingModule {}
