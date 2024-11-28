import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClipixSubscribePage } from './clipix-subscribe.page';

const routes: Routes = [
  {
    path: '',
    component: ClipixSubscribePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClipixSubscribePageRoutingModule {}
