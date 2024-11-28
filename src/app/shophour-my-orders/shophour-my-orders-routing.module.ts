import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShophourMyOrdersPage } from './shophour-my-orders.page';

const routes: Routes = [
  {
    path: '',
    component: ShophourMyOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShophourMyOrdersPageRoutingModule {}
