import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GropotHomePage } from './gropot-home.page';

const routes: Routes = [
  {
    path: '',
    component: GropotHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GropotHomePageRoutingModule {}
