import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HungerzSignInPage } from './hungerz-sign-in.page';

const routes: Routes = [
  {
    path: '',
    component: HungerzSignInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HungerzSignInPageRoutingModule {}
