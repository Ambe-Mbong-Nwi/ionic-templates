import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShophourOffersPage } from './shophour-offers.page';

const routes: Routes = [
  {
    path: '',
    component: ShophourOffersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShophourOffersPageRoutingModule {}
