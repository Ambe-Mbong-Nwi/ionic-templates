import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctoworldPillRemindersPage } from './doctoworld-pill-reminders.page';

const routes: Routes = [
  {
    path: '',
    component: DoctoworldPillRemindersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctoworldPillRemindersPageRoutingModule {}
