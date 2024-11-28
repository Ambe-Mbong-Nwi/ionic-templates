import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WoochatVideoCallPage } from './woochat-video-call.page';

const routes: Routes = [
  {
    path: '',
    component: WoochatVideoCallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WoochatVideoCallPageRoutingModule {}
