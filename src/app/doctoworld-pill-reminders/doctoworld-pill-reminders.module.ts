import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctoworldPillRemindersPageRoutingModule } from './doctoworld-pill-reminders-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { DoctoworldPillRemindersPage } from './doctoworld-pill-reminders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DoctoworldPillRemindersPageRoutingModule
  ],
  declarations: [DoctoworldPillRemindersPage]
})
export class DoctoworldPillRemindersPageModule { }
