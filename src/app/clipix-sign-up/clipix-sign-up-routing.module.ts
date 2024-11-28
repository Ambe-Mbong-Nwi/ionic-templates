import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClipixSignUpPage } from './clipix-sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: ClipixSignUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClipixSignUpPageRoutingModule {}
