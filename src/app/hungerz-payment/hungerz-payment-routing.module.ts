import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HungerzPaymentPage } from './hungerz-payment.page';

const routes: Routes = [
  {
    path: '',
    component: HungerzPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HungerzPaymentPageRoutingModule {}
