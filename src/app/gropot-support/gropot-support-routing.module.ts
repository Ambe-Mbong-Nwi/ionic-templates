import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GropotSupportPage } from './gropot-support.page';

const routes: Routes = [
  {
    path: '',
    component: GropotSupportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GropotSupportPageRoutingModule {}
