import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HungerzMyOrdersPage } from './hungerz-my-orders.page';

const routes: Routes = [
  {
    path: '',
    component: HungerzMyOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HungerzMyOrdersPageRoutingModule {}
