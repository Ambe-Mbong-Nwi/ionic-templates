import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QvidSignInPage } from './qvid-sign-in.page';

const routes: Routes = [
  {
    path: '',
    component: QvidSignInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QvidSignInPageRoutingModule {}