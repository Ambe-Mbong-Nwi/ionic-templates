import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctoworldCartPage } from './doctoworld-cart.page';

const routes: Routes = [
  {
    path: '',
    component: DoctoworldCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctoworldCartPageRoutingModule {}
