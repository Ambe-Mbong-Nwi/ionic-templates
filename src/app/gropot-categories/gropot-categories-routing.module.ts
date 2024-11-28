import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GropotCategoriesPage } from './gropot-categories.page';

const routes: Routes = [
  {
    path: '',
    component: GropotCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GropotCategoriesPageRoutingModule {}
