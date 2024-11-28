import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctoworldBookAppointmentPage } from './doctoworld-book-appointment.page';

const routes: Routes = [
  {
    path: '',
    component: DoctoworldBookAppointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctoworldBookAppointmentPageRoutingModule {}
