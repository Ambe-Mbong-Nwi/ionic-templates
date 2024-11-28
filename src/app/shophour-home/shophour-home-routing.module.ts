import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShophourHomePage } from './shophour-home.page';

const routes: Routes = [
  {
    path: '',
    component: ShophourHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShophourHomePageRoutingModule {}
