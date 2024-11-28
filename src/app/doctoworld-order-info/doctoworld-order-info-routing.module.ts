import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctoworldOrderInfoPage } from './doctoworld-order-info.page';

const routes: Routes = [
  {
    path: '',
    component: DoctoworldOrderInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctoworldOrderInfoPageRoutingModule {}
