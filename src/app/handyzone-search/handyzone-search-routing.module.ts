import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandyzoneSearchPage } from './handyzone-search.page';

const routes: Routes = [
  {
    path: '',
    component: HandyzoneSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HandyzoneSearchPageRoutingModule {}
