import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctoworldHospitalPage } from './doctoworld-hospital.page';

const routes: Routes = [
  {
    path: '',
    component: DoctoworldHospitalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctoworldHospitalPageRoutingModule {}
