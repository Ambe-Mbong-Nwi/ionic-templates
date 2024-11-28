import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HungerzAddReviewPage } from './hungerz-add-review.page';

const routes: Routes = [
  {
    path: '',
    component: HungerzAddReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HungerzAddReviewPageRoutingModule {}
