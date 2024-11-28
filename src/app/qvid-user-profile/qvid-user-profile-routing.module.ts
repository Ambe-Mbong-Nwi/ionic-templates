import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QvidUserProfilePage } from './qvid-user-profile.page';

const routes: Routes = [
  {
    path: '',
    component: QvidUserProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QvidUserProfilePageRoutingModule {}
