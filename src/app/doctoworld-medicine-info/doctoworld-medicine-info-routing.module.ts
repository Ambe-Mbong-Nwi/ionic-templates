import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctoworldMedicineInfoPage } from './doctoworld-medicine-info.page';

const routes: Routes = [
  {
    path: '',
    component: DoctoworldMedicineInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctoworldMedicineInfoPageRoutingModule {}
