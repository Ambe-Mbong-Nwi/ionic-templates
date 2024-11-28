import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctoworldMyOrdersPage } from './doctoworld-my-orders.page';

const routes: Routes = [
  {
    path: '',
    component: DoctoworldMyOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctoworldMyOrdersPageRoutingModule {}
