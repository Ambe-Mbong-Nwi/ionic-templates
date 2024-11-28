import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctoworldHospitalInfoPage } from './doctoworld-hospital-info.page';

const routes: Routes = [
  {
    path: '',
    component: DoctoworldHospitalInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctoworldHospitalInfoPageRoutingModule {}
