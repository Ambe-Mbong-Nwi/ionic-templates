import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShophourCartPageRoutingModule } from './shophour-cart-routing.module';

import { ShophourCartPage } from './shophour-cart.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ShophourCartPageRoutingModule
  ],
  declarations: [ShophourCartPage]
})
export class ShophourCartPageModule {}
