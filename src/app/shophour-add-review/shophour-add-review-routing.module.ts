import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShophourAddReviewPage } from './shophour-add-review.page';

const routes: Routes = [
  {
    path: '',
    component: ShophourAddReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShophourAddReviewPageRoutingModule {}
