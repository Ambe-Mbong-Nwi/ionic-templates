import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShophourCartPage } from './shophour-cart.page';

const routes: Routes = [
  {
    path: '',
    component: ShophourCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShophourCartPageRoutingModule {}
