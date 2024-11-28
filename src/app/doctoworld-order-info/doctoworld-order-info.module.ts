import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctoworldOrderInfoPageRoutingModule } from './doctoworld-order-info-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { DoctoworldOrderInfoPage } from './doctoworld-order-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DoctoworldOrderInfoPageRoutingModule
  ],
  declarations: [DoctoworldOrderInfoPage]
})
export class DoctoworldOrderInfoPageModule { }
