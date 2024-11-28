import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClipixPaymentPage } from './clipix-payment.page';

const routes: Routes = [
  {
    path: '',
    component: ClipixPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClipixPaymentPageRoutingModule {}
