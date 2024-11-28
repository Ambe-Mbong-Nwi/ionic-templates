import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShophourOrderConfirmPage } from './shophour-order-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: ShophourOrderConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShophourOrderConfirmPageRoutingModule {}
