import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GropotItemInfoPage } from './gropot-item-info.page';

const routes: Routes = [
  {
    path: '',
    component: GropotItemInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GropotItemInfoPageRoutingModule {}
