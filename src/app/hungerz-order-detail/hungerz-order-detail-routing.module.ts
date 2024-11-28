import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HungerzOrderDetailPage } from './hungerz-order-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HungerzOrderDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HungerzOrderDetailPageRoutingModule {}
