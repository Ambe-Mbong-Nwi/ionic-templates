import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WoochatChattingPage } from './woochat-chatting.page';

const routes: Routes = [
  {
    path: '',
    component: WoochatChattingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WoochatChattingPageRoutingModule {}
