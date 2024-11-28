import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GopoolHomePage } from './gopool-home.page';

const routes: Routes = [
  {
    path: '',
    component: GopoolHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GopoolHomePageRoutingModule {}
