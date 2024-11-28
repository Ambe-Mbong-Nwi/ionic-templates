import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QvidEditProfilePage } from './qvid-edit-profile.page';

const routes: Routes = [
  {
    path: '',
    component: QvidEditProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QvidEditProfilePageRoutingModule {}
