import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShophourSelectAddressPage } from './shophour-select-address.page';

const routes: Routes = [
  {
    path: '',
    component: ShophourSelectAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShophourSelectAddressPageRoutingModule {}
