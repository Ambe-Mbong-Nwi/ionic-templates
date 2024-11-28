import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShophourSellerInfoPage } from './shophour-seller-info.page';

const routes: Routes = [
  {
    path: '',
    component: ShophourSellerInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShophourSellerInfoPageRoutingModule {}
