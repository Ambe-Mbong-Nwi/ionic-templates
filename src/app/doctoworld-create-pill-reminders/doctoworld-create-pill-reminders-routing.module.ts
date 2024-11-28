import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctoworldCreatePillRemindersPage } from './doctoworld-create-pill-reminders.page';

const routes: Routes = [
  {
    path: '',
    component: DoctoworldCreatePillRemindersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctoworldCreatePillRemindersPageRoutingModule {}
