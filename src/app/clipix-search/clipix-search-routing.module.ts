import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClipixSearchPage } from './clipix-search.page';

const routes: Routes = [
  {
    path: '',
    component: ClipixSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClipixSearchPageRoutingModule {}
