import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClipixMyProfilePage } from './clipix-my-profile.page';

const routes: Routes = [
  {
    path: '',
    component: ClipixMyProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClipixMyProfilePageRoutingModule {}
