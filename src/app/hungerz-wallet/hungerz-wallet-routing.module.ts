import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HungerzWalletPage } from './hungerz-wallet.page';

const routes: Routes = [
  {
    path: '',
    component: HungerzWalletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HungerzWalletPageRoutingModule {}
