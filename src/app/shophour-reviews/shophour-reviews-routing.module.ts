import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShophourReviewsPage } from './shophour-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: ShophourReviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShophourReviewsPageRoutingModule {}
