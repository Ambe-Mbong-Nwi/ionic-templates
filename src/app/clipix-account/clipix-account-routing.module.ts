import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClipixAccountPage } from './clipix-account.page';

const routes: Routes = [
  {
    path: '',
    component: ClipixAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClipixAccountPageRoutingModule {}
