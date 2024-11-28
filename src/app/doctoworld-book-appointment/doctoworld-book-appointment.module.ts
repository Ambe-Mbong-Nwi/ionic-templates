import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctoworldBookAppointmentPageRoutingModule } from './doctoworld-book-appointment-routing.module';

import { TranslateModule } from '@ngx-translate/core';
  
import { DoctoworldBookAppointmentPage } from './doctoworld-book-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DoctoworldBookAppointmentPageRoutingModule
  ],
  declarations: [DoctoworldBookAppointmentPage]
})
export class DoctoworldBookAppointmentPageModule {}
