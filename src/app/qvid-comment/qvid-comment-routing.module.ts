import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QvidCommentPage } from './qvid-comment.page';

const routes: Routes = [
  {
    path: '',
    component: QvidCommentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QvidCommentPageRoutingModule {}
