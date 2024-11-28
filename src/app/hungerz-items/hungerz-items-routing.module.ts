import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HungerzItemsPage } from './hungerz-items.page';

const routes: Routes = [
  {
    path: '',
    component: HungerzItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HungerzItemsPageRoutingModule {}
