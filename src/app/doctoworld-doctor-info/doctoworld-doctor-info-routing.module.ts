import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctoworldDoctorInfoPage } from './doctoworld-doctor-info.page';

const routes: Routes = [
  {
    path: '',
    component: DoctoworldDoctorInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctoworldDoctorInfoPageRoutingModule {}
