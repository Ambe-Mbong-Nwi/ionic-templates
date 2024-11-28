import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClipixTabsPage } from './clipix-tabs.page';

const routes: Routes = [
  {
    path: 'clipix-tabs',
    component: ClipixTabsPage,
    children: [
      {
        path: 'clipixHome',
        loadChildren: () => import('../clipix-home/clipix-home.module').then(m => m.ClipixHomePageModule)
      },
      {
        path: 'clipixSearch',
        loadChildren: () => import('../clipix-search/clipix-search.module').then(m => m.ClipixSearchPageModule)
      },
      {
        path: 'clipixWatchlist',
        loadChildren: () => import('../clipix-watchlist/clipix-watchlist.module').then(m => m.ClipixWatchlistPageModule)
      },
      {
        path: 'clipixAccount',
        loadChildren: () => import('../clipix-account/clipix-account.module').then(m => m.ClipixAccountPageModule)
      },
    ]
  },
  { 
    path: '',
    redirectTo: '/clipix-tabs/clipixHome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClipixTabsPageRoutingModule { }
