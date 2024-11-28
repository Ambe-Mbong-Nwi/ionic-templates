import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GropotOrderInfoPage } from './gropot-order-info.page';

const routes: Routes = [
  {
    path: '',
    component: GropotOrderInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GropotOrderInfoPageRoutingModule {}
