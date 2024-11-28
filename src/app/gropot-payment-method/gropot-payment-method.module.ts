import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GropotPaymentMethodPageRoutingModule } from './gropot-payment-method-routing.module';

import { GropotPaymentMethodPage } from './gropot-payment-method.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    GropotPaymentMethodPageRoutingModule
  ],
  declarations: [GropotPaymentMethodPage]
})
export class GropotPaymentMethodPageModule { }
