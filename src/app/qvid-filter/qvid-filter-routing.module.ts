import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QvidFilterPage } from './qvid-filter.page';

const routes: Routes = [
  {
    path: '',
    component: QvidFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QvidFilterPageRoutingModule {}
