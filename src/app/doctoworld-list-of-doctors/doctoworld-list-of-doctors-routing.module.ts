import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctoworldListOfDoctorsPage } from './doctoworld-list-of-doctors.page';

const routes: Routes = [
  {
    path: '',
    component: DoctoworldListOfDoctorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctoworldListOfDoctorsPageRoutingModule {}
