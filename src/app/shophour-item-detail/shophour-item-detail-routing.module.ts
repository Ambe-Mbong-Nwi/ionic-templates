import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShophourItemDetailPage } from './shophour-item-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ShophourItemDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShophourItemDetailPageRoutingModule {}
