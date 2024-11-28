import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HungerzConfirmOrderPage } from './hungerz-confirm-order.page';

const routes: Routes = [
  {
    path: '',
    component: HungerzConfirmOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HungerzConfirmOrderPageRoutingModule {}
