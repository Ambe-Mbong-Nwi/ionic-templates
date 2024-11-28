import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WoochatSignInPage } from './woochat-sign-in.page';

const routes: Routes = [
  {
    path: '',
    component: WoochatSignInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WoochatSignInPageRoutingModule {}
