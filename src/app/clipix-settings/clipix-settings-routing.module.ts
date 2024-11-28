import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClipixSettingsPage } from './clipix-settings.page';

const routes: Routes = [
  {
    path: '',
    component: ClipixSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClipixSettingsPageRoutingModule {}
