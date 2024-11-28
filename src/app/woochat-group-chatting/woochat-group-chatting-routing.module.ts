import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WoochatGroupChattingPage } from './woochat-group-chatting.page';

const routes: Routes = [
  {
    path: '',
    component: WoochatGroupChattingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WoochatGroupChattingPageRoutingModule {}
