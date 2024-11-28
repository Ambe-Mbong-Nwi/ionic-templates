import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QvidSearchResultPage } from './qvid-search-result.page';

const routes: Routes = [
  {
    path: '',
    component: QvidSearchResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QvidSearchResultPageRoutingModule {}
