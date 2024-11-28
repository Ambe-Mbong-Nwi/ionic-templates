import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';

import { DoctoworldHospitalInfoPageRoutingModule } from './doctoworld-hospital-info-routing.module';

import { DoctoworldHospitalInfoPage } from './doctoworld-hospital-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DoctoworldHospitalInfoPageRoutingModule
  ],
  declarations: [DoctoworldHospitalInfoPage]
})
export class DoctoworldHospitalInfoPageModule {}
