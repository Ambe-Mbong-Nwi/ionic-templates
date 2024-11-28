import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GropotPaymentMethodPage } from './gropot-payment-method.page';

const routes: Routes = [
  {
    path: '',
    component: GropotPaymentMethodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GropotPaymentMethodPageRoutingModule {}
