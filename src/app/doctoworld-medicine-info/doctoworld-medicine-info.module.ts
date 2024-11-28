import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctoworldMedicineInfoPageRoutingModule } from './doctoworld-medicine-info-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { DoctoworldMedicineInfoPage } from './doctoworld-medicine-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DoctoworldMedicineInfoPageRoutingModule
  ],
  declarations: [DoctoworldMedicineInfoPage]
})
export class DoctoworldMedicineInfoPageModule {}
