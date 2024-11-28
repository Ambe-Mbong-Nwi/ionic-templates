import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandyzoneSupportPage } from './handyzone-support.page';

const routes: Routes = [
  {
    path: '',
    component: HandyzoneSupportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HandyzoneSupportPageRoutingModule {}
