import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QvidChatPage } from './qvid-chat.page';

const routes: Routes = [
  {
    path: '',
    component: QvidChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QvidChatPageRoutingModule {}
