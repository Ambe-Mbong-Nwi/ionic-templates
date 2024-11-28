import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GopoolAccountPage } from './gopool-account.page';

const routes: Routes = [
  {
    path: '',
    component: GopoolAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GopoolAccountPageRoutingModule {}
