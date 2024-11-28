import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QvidExplorePage } from './qvid-explore.page';

const routes: Routes = [
  {
    path: '',
    component: QvidExplorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QvidExplorePageRoutingModule {}
