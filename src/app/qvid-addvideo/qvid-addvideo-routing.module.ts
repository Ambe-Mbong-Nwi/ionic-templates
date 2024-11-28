import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QvidAddvideoPage } from './qvid-addvideo.page';

const routes: Routes = [
  {
    path: '',
    component: QvidAddvideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QvidAddvideoPageRoutingModule {}
