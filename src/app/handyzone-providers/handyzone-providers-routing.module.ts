import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandyzoneProvidersPage } from './handyzone-providers.page';

const routes: Routes = [
  {
    path: '',
    component: HandyzoneProvidersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HandyzoneProvidersPageRoutingModule {}
