import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QvidMyProfilePage } from './qvid-my-profile.page';

const routes: Routes = [
  {
    path: '',
    component: QvidMyProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QvidMyProfilePageRoutingModule {}
