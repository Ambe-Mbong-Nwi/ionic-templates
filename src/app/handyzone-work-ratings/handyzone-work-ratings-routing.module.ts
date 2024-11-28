import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandyzoneWorkRatingsPage } from './handyzone-work-ratings.page';

const routes: Routes = [
  {
    path: '',
    component: HandyzoneWorkRatingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HandyzoneWorkRatingsPageRoutingModule {}
