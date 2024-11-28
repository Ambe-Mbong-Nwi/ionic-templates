import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WoochatCallLogsPage } from './woochat-call-logs.page';

const routes: Routes = [
  {
    path: '',
    component: WoochatCallLogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WoochatCallLogsPageRoutingModule {}
