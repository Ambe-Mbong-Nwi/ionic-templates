import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShophourPaymentModePageRoutingModule } from './shophour-payment-mode-routing.module';

import { ShophourPaymentModePage } from './shophour-payment-mode.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ShophourPaymentModePageRoutingModule
  ],
  declarations: [ShophourPaymentModePage]
})
export class ShophourPaymentModePageModule {}
