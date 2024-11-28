import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GropotCouponPage } from './gropot-coupon.page';

const routes: Routes = [
  {
    path: '',
    component: GropotCouponPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GropotCouponPageRoutingModule {}
