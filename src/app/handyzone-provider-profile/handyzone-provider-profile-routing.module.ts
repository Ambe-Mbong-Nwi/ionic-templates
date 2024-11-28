import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandyzoneProviderProfilePage } from './handyzone-provider-profile.page';

const routes: Routes = [
  {
    path: '',
    component: HandyzoneProviderProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HandyzoneProviderProfilePageRoutingModule {}
