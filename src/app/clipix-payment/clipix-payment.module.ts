import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClipixPaymentPageRoutingModule } from './clipix-payment-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { ClipixPaymentPage } from './clipix-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ClipixPaymentPageRoutingModule
  ],
  declarations: [ClipixPaymentPage]
})
export class ClipixPaymentPageModule {}
