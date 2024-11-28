import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctoworldWalletPage } from './doctoworld-wallet.page';

const routes: Routes = [
  {
    path: '',
    component: DoctoworldWalletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctoworldWalletPageRoutingModule {}
