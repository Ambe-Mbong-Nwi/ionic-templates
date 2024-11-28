import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandyzoneWalletPage } from './handyzone-wallet.page';

const routes: Routes = [
  {
    path: '',
    component: HandyzoneWalletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HandyzoneWalletPageRoutingModule {}
