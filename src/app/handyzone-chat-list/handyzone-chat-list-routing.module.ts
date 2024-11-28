import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandyzoneChatListPage } from './handyzone-chat-list.page';

const routes: Routes = [
  {
    path: '',
    component: HandyzoneChatListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HandyzoneChatListPageRoutingModule {}
