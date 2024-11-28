import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GopoolMyProfilePage } from './gopool-my-profile.page';

const routes: Routes = [
  {
    path: '',
    component: GopoolMyProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GopoolMyProfilePageRoutingModule {}
