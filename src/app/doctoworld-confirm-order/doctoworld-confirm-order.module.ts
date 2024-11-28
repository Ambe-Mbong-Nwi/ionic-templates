import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { DoctoworldConfirmOrderPageRoutingModule } from './doctoworld-confirm-order-routing.module';

import { DoctoworldConfirmOrderPage } from './doctoworld-confirm-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DoctoworldConfirmOrderPageRoutingModule
  ],
  declarations: [DoctoworldConfirmOrderPage]
})
export class DoctoworldConfirmOrderPageModule {}
