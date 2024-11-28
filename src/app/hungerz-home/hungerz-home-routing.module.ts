import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HungerzHomePage } from './hungerz-home.page';

const routes: Routes = [
  {
    path: '',
    component: HungerzHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HungerzHomePageRoutingModule {}
