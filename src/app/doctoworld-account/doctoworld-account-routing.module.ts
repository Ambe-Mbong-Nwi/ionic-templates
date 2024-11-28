import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctoworldAccountPage } from './doctoworld-account.page';

const routes: Routes = [
  {
    path: '',
    component: DoctoworldAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctoworldAccountPageRoutingModule {}
