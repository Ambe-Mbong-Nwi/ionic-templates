import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctoworldSignInPage } from './doctoworld-sign-in.page';

const routes: Routes = [
  {
    path: '',
    component: DoctoworldSignInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctoworldSignInPageRoutingModule {}
