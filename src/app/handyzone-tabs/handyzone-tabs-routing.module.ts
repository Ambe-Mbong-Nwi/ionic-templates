import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandyzoneTabsPage } from './handyzone-tabs.page';

const routes: Routes = [
  {
    path: 'handyzone-tabs',
    component: HandyzoneTabsPage,
    children: [
      {
        path: 'handyzoneHome',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../handyzone-home/handyzone-home.module').then(m => m.HandyzoneHomePageModule)
          }
        ]
      },
      {
        path: 'handyzoneMyBookings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../handyzone-my-bookings/handyzone-my-bookings.module').then(m => m.HandyzoneMyBookingsPageModule)
          }
        ]
      },
      {
        path: 'handyzoneChatList',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../handyzone-chat-list/handyzone-chat-list.module').then(m => m.HandyzoneChatListPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/handyzone-tabs/handyzoneHome',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HandyzoneTabsPageRoutingModule {}
