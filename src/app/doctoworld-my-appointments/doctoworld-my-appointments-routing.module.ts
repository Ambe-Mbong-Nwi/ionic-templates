import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctoworldMyAppointmentsPage } from './doctoworld-my-appointments.page';

const routes: Routes = [
  {
    path: '',
    component: DoctoworldMyAppointmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctoworldMyAppointmentsPageRoutingModule {}
