import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClipixWatchlistPage } from './clipix-watchlist.page';

const routes: Routes = [
  {
    path: '',
    component: ClipixWatchlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClipixWatchlistPageRoutingModule {}
