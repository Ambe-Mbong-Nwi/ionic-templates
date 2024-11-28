import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GropotAccountPage } from './gropot-account.page';

const routes: Routes = [
  {
    path: '',
    component: GropotAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GropotAccountPageRoutingModule {}
