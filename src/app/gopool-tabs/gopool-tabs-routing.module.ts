import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GopoolTabsPage } from './gopool-tabs.page';

const routes: Routes = [
  {
    path: 'gopool-tabs',
    component: GopoolTabsPage,
    children: [
      {
        path: 'GopoolHome',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../gopool-home/gopool-home.module').then(m => m.GopoolHomePageModule)
          }
        ]
      },
      {
        path: 'GopoolMyTrips',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../gopool-my-trips/gopool-my-trips.module').then(m => m.GopoolMyTripsPageModule)
          }
        ]
      },
      {
        path: 'GopoolChats',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../gopool-chats/gopool-chats.module').then(m => m.GopoolChatsPageModule)
          }
        ]
      },
      {
        path: 'GopoolAccount',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../gopool-account/gopool-account.module').then(m => m.GopoolAccountPageModule)
          }
        ]
      },
    
      {
        path: '',
        redirectTo: '/Gopool-tabs/GopoolHome',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GopoolTabsPageRoutingModule { }
