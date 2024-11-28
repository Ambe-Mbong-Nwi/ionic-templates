import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctoworldCreatePillRemindersPageRoutingModule } from './doctoworld-create-pill-reminders-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { DoctoworldCreatePillRemindersPage } from './doctoworld-create-pill-reminders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DoctoworldCreatePillRemindersPageRoutingModule
  ],
  declarations: [DoctoworldCreatePillRemindersPage]
})
export class DoctoworldCreatePillRemindersPageModule {}
