import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QvidVideoviewPage } from './qvid-videoview.page';

const routes: Routes = [
  {
    path: '',
    component: QvidVideoviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QvidVideoviewPageRoutingModule {}
