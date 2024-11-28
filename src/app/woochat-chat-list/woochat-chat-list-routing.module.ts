import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WoochatChatListPage } from './woochat-chat-list.page';

const routes: Routes = [
  {
    path: '',
    component: WoochatChatListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WoochatChatListPageRoutingModule {}
