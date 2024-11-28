import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WoochatGrupListPage } from './woochat-grup-list.page';

const routes: Routes = [
  {
    path: '',
    component: WoochatGrupListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WoochatGrupListPageRoutingModule {}
