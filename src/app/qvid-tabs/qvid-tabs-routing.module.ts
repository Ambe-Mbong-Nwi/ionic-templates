import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QvidTabsPage } from './qvid-tabs.page';

const routes: Routes = [
  {
    path: 'qvid-tabs',
    component: QvidTabsPage,
    children: [
      {
        path: 'qvidHome',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../qvid-home/qvid-home.module').then(m => m.QvidHomePageModule)
          }
        ]
      },
      {
        path: 'qvidExplore',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../qvid-explore/qvid-explore.module').then(m => m.QvidExplorePageModule)
          }
        ]
      },
      {
        path: 'qvidNotification',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../qvid-notification/qvid-notification.module').then(m => m.QvidNotificationPageModule)
          }
        ]
      },
      {
        path: 'qvidMyProfile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../qvid-my-profile/qvid-my-profile.module').then(m => m.QvidMyProfilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/qvid-tabs/qvidHome',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QvidTabsPageRoutingModule { }
