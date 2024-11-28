import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HungerzConfirmOrderPageRoutingModule } from './hungerz-confirm-order-routing.module';

import { HungerzConfirmOrderPage } from './hungerz-confirm-order.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    HungerzConfirmOrderPageRoutingModule
  ],
  declarations: [HungerzConfirmOrderPage]
})
export class HungerzConfirmOrderPageModule {}
