import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GropotFavoritePage } from './gropot-favorite.page';

const routes: Routes = [
  {
    path: '',
    component: GropotFavoritePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GropotFavoritePageRoutingModule {}
