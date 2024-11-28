import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandyzoneServicesPage } from './handyzone-services.page';

const routes: Routes = [
  {
    path: '',
    component: HandyzoneServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HandyzoneServicesPageRoutingModule {}
