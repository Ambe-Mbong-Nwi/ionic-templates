import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GropotMyCartPage } from './gropot-my-cart.page';

const routes: Routes = [
  {
    path: '',
    component: GropotMyCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GropotMyCartPageRoutingModule {}
