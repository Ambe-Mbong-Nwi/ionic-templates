import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShophourSearchPage } from './shophour-search.page';

const routes: Routes = [
  {
    path: '',
    component: ShophourSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShophourSearchPageRoutingModule {}
