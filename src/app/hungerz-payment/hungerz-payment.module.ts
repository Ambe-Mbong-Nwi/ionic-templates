import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HungerzPaymentPageRoutingModule } from './hungerz-payment-routing.module';

import { HungerzPaymentPage } from './hungerz-payment.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    HungerzPaymentPageRoutingModule
  ],
  declarations: [HungerzPaymentPage]
})
export class HungerzPaymentPageModule {}
