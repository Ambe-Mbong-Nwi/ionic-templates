import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WoochatMorePage } from './woochat-more.page';

const routes: Routes = [
  {
    path: '',
    component: WoochatMorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WoochatMorePageRoutingModule {}
