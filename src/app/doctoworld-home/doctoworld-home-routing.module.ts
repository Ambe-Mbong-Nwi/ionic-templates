import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctoworldHomePage } from './doctoworld-home.page';

const routes: Routes = [
  {
    path: '',
    component: DoctoworldHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctoworldHomePageRoutingModule {}
