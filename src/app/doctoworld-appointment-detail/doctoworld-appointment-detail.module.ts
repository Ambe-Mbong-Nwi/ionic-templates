import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctoworldAppointmentDetailPageRoutingModule } from './doctoworld-appointment-detail-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { DoctoworldAppointmentDetailPage } from './doctoworld-appointment-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DoctoworldAppointmentDetailPageRoutingModule
  ],
  declarations: [DoctoworldAppointmentDetailPage]
})
export class DoctoworldAppointmentDetailPageModule {}
