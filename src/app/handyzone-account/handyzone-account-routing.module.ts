import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandyzoneAccountPage } from './handyzone-account.page';

const routes: Routes = [
  {
    path: '',
    component: HandyzoneAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HandyzoneAccountPageRoutingModule {}
