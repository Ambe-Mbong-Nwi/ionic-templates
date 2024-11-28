import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WoochatNewChatPage } from './woochat-new-chat.page';

const routes: Routes = [
  {
    path: '',
    component: WoochatNewChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WoochatNewChatPageRoutingModule {}
