import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShophourSearchResultPage } from './shophour-search-result.page';

const routes: Routes = [
  {
    path: '',
    component: ShophourSearchResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShophourSearchResultPageRoutingModule {}
