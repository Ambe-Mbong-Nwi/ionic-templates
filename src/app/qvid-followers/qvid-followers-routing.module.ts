import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QvidFollowersPage } from './qvid-followers.page';

const routes: Routes = [
  {
    path: '',
    component: QvidFollowersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QvidFollowersPageRoutingModule {}
