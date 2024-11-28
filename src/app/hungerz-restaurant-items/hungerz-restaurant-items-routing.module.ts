import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HungerzRestaurantItemsPage } from './hungerz-restaurant-items.page';

const routes: Routes = [
  {
    path: '',
    component: HungerzRestaurantItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HungerzRestaurantItemsPageRoutingModule {}
