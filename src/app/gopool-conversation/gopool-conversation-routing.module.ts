import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GopoolConversationPage } from './gopool-conversation.page';

const routes: Routes = [
  {
    path: '',
    component: GopoolConversationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GopoolConversationPageRoutingModule {}
