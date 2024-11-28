import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GopoolSelectLocationPage } from './gopool-select-location.page';

const routes: Routes = [
  {
    path: '',
    component: GopoolSelectLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GopoolSelectLocationPageRoutingModule {}
