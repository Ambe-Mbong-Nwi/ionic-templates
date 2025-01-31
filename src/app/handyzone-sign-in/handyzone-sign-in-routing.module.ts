import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandyzoneSignInPage } from './handyzone-sign-in.page';

const routes: Routes = [
  {
    path: '',
    component: HandyzoneSignInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HandyzoneSignInPageRoutingModule {}
