import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WoochatTabsPage } from './woochat-tabs.page';

const routes: Routes = [
  {
    path: 'woochat-tabs',
    component: WoochatTabsPage,
    children: [
      {
        path: 'woochatChatList',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../woochat-chat-list/woochat-chat-list.module').then(m => m.WoochatChatListPageModule)
          }
        ]
      },
      {
        path: 'woochatCallLogs',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../woochat-call-logs/woochat-call-logs.module').then(m => m.WoochatCallLogsPageModule)
          }
        ]
      },
      {
        path: 'woochatGrupList',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../woochat-grup-list/woochat-grup-list.module').then(m => m.WoochatGrupListPageModule)
          }
        ]
      },
      {
        path: 'woochatMore',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../woochat-more/woochat-more.module').then(m => m.WoochatMorePageModule)
          }
        ]
      },

      {
        path: '',
        redirectTo: '/woochat-tabs/woochatChatList',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WoochatTabsPageRoutingModule { }
