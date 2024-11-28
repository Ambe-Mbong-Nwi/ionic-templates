import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShophourPaymentModePage } from './shophour-payment-mode.page';

const routes: Routes = [
  {
    path: '',
    component: ShophourPaymentModePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShophourPaymentModePageRoutingModule {}
