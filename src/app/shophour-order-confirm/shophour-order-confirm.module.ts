import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShophourOrderConfirmPageRoutingModule } from './shophour-order-confirm-routing.module';

import { ShophourOrderConfirmPage } from './shophour-order-confirm.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ShophourOrderConfirmPageRoutingModule
  ],
  declarations: [ShophourOrderConfirmPage]
})
export class ShophourOrderConfirmPageModule {}
