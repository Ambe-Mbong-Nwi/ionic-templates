import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClipixSupportPage } from './clipix-support.page';

const routes: Routes = [
  {
    path: '',
    component: ClipixSupportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClipixSupportPageRoutingModule {}
