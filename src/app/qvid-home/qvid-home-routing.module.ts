import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QvidHomePage } from './qvid-home.page';

const routes: Routes = [
  {
    path: '',
    component: QvidHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QvidHomePageRoutingModule {}
