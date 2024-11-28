import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HungerzMyAccountPage } from './hungerz-my-account.page';

const routes: Routes = [
  {
    path: '',
    component: HungerzMyAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HungerzMyAccountPageRoutingModule {}
