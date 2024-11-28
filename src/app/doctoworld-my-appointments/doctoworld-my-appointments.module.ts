import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctoworldMyAppointmentsPageRoutingModule } from './doctoworld-my-appointments-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { DoctoworldMyAppointmentsPage } from './doctoworld-my-appointments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DoctoworldMyAppointmentsPageRoutingModule
  ],
  declarations: [DoctoworldMyAppointmentsPage]
})
export class DoctoworldMyAppointmentsPageModule {}
