import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClipixSignInPage } from './clipix-sign-in.page';

const routes: Routes = [
  {
    path: '',
    component: ClipixSignInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClipixSignInPageRoutingModule {}
