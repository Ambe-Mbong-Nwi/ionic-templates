import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctoworldConfirmOrderPage } from './doctoworld-confirm-order.page';

const routes: Routes = [
  {
    path: '',
    component: DoctoworldConfirmOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctoworldConfirmOrderPageRoutingModule {}
