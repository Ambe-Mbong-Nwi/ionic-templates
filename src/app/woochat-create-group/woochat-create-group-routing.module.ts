import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WoochatCreateGroupPage } from './woochat-create-group.page';

const routes: Routes = [
  {
    path: '',
    component: WoochatCreateGroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WoochatCreateGroupPageRoutingModule {}
