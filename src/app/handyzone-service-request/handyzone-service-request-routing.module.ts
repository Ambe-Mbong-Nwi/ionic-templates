import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandyzoneServiceRequestPage } from './handyzone-service-request.page';

const routes: Routes = [
  {
    path: '',
    component: HandyzoneServiceRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HandyzoneServiceRequestPageRoutingModule {}
