import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClipixMoviePage } from './clipix-movie.page';

const routes: Routes = [
  {
    path: '',
    component: ClipixMoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClipixMoviePageRoutingModule {}
