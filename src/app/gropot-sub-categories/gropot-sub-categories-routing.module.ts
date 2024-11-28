import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GropotSubCategoriesPage } from './gropot-sub-categories.page';

const routes: Routes = [
  {
    path: '',
    component: GropotSubCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GropotSubCategoriesPageRoutingModule {}
