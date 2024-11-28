import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QvidPostInfoPage } from './qvid-post-info.page';

const routes: Routes = [
  {
    path: '',
    component: QvidPostInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QvidPostInfoPageRoutingModule {}
