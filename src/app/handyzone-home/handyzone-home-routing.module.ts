import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandyzoneHomePage } from './handyzone-home.page';

const routes: Routes = [
  {
    path: '',
    component: HandyzoneHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HandyzoneHomePageRoutingModule {}
