import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClipixWebSeriesPage } from './clipix-web-series.page';

const routes: Routes = [
  {
    path: '',
    component: ClipixWebSeriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClipixWebSeriesPageRoutingModule {}
