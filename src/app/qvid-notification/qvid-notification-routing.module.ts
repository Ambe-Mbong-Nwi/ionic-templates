import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QvidNotificationPage } from './qvid-notification.page';

const routes: Routes = [
  {
    path: '',
    component: QvidNotificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QvidNotificationPageRoutingModule {}
