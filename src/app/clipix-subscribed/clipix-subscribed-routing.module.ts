import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClipixSubscribedPage } from './clipix-subscribed.page';

const routes: Routes = [
  {
    path: '',
    component: ClipixSubscribedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClipixSubscribedPageRoutingModule {}
