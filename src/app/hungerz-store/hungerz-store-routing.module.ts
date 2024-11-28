import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HungerzStorePage } from './hungerz-store.page';

const routes: Routes = [
  {
    path: '',
    component: HungerzStorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HungerzStorePageRoutingModule {}
