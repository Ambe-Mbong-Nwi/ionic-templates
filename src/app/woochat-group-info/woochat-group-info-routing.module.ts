import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WoochatGroupInfoPage } from './woochat-group-info.page';

const routes: Routes = [
  {
    path: '',
    component: WoochatGroupInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WoochatGroupInfoPageRoutingModule {}
