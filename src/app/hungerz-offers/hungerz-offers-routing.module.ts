import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HungerzOffersPage } from './hungerz-offers.page';

const routes: Routes = [
  {
    path: '',
    component: HungerzOffersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HungerzOffersPageRoutingModule {}
