import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctoworldHospitalPageRoutingModule } from './doctoworld-hospital-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { DoctoworldHospitalPage } from './doctoworld-hospital.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DoctoworldHospitalPageRoutingModule
  ],
  declarations: [DoctoworldHospitalPage]
})
export class DoctoworldHospitalPageModule {}
