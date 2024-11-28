import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctoworldSelectDayesPage } from './doctoworld-select-dayes.page';

const routes: Routes = [
  {
    path: '',
    component: DoctoworldSelectDayesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctoworldSelectDayesPageRoutingModule {}
