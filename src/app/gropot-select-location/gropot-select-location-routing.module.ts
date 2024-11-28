import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GropotSelectLocationPage } from './gropot-select-location.page';

const routes: Routes = [
  {
    path: '',
    component: GropotSelectLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GropotSelectLocationPageRoutingModule {}
