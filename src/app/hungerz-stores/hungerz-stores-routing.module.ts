import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HungerzStoresPage } from './hungerz-stores.page';

const routes: Routes = [
  {
    path: '',
    component: HungerzStoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HungerzStoresPageRoutingModule {}
