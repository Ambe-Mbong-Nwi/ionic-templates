import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GopoolChatsPage } from './gopool-chats.page';

const routes: Routes = [
  {
    path: '',
    component: GopoolChatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GopoolChatsPageRoutingModule {}
