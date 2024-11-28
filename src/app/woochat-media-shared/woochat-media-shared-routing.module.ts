import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WoochatMediaSharedPage } from './woochat-media-shared.page';

const routes: Routes = [
  {
    path: '',
    component: WoochatMediaSharedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WoochatMediaSharedPageRoutingModule {}
