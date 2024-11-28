import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GopoolWalletPage } from './gopool-wallet.page';

const routes: Routes = [
  {
    path: '',
    component: GopoolWalletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GopoolWalletPageRoutingModule {}
