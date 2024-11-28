import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GropotWalletPage } from './gropot-wallet.page';

const routes: Routes = [
  {
    path: '',
    component: GropotWalletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GropotWalletPageRoutingModule {}
