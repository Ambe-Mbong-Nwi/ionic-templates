import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GropotOrderDeliveredPage } from './gropot-order-delivered.page';

const routes: Routes = [
  {
    path: '',
    component: GropotOrderDeliveredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GropotOrderDeliveredPageRoutingModule {}
