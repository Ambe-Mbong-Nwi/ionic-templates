import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GropotSignInPage } from './gropot-sign-in.page';

const routes: Routes = [
  {
    path: '',
    component: GropotSignInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GropotSignInPageRoutingModule {}
