import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HungerzBookTablePage } from './hungerz-book-table.page';

const routes: Routes = [
  {
    path: '',
    component: HungerzBookTablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HungerzBookTablePageRoutingModule {}
