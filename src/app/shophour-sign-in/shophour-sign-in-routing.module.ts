import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShophourSignInPage } from './shophour-sign-in.page';

const routes: Routes = [
  {
    path: '',
    component: ShophourSignInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShophourSignInPageRoutingModule {}
