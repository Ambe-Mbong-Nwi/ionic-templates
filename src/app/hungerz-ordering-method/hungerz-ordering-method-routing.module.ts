import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HungerzOrderingMethodPage } from './hungerz-ordering-method.page';

const routes: Routes = [
  {
    path: '',
    component: HungerzOrderingMethodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HungerzOrderingMethodPageRoutingModule {}
