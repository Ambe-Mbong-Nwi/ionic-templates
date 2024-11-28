import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WoochatProfileInfoPage } from './woochat-profile-info.page';

const routes: Routes = [
  {
    path: '',
    component: WoochatProfileInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WoochatProfileInfoPageRoutingModule {}
