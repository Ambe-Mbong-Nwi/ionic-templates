import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctoworldAppointmentDetailPage } from './doctoworld-appointment-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DoctoworldAppointmentDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctoworldAppointmentDetailPageRoutingModule {}
