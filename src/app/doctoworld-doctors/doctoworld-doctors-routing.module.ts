import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctoworldDoctorsPage } from './doctoworld-doctors.page';

const routes: Routes = [
  {
    path: '',
    component: DoctoworldDoctorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctoworldDoctorsPageRoutingModule {}
