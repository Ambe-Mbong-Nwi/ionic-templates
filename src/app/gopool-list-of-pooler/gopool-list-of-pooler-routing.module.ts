import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GopoolListOfPoolerPage } from './gopool-list-of-pooler.page';

const routes: Routes = [
  {
    path: '',
    component: GopoolListOfPoolerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GopoolListOfPoolerPageRoutingModule {}
