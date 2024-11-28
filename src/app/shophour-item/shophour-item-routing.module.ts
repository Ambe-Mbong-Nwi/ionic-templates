import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShophourItemPage } from './shophour-item.page';

const routes: Routes = [
  {
    path: '',
    component: ShophourItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShophourItemPageRoutingModule {}
