import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClipixHomePage } from './clipix-home.page';

const routes: Routes = [
  {
    path: '',
    component: ClipixHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClipixHomePageRoutingModule {}
