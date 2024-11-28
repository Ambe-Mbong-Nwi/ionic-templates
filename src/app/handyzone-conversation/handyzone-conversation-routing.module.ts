import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandyzoneConversationPage } from './handyzone-conversation.page';

const routes: Routes = [
  {
    path: '',
    component: HandyzoneConversationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HandyzoneConversationPageRoutingModule {}
