import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HungerzChatPage } from './hungerz-chat.page';

const routes: Routes = [
  {
    path: '',
    component: HungerzChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HungerzChatPageRoutingModule {}
