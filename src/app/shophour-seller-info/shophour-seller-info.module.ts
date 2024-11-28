import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShophourSellerInfoPageRoutingModule } from './shophour-seller-info-routing.module';

import { ShophourSellerInfoPage } from './shophour-seller-info.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ShophourSellerInfoPageRoutingModule
  ],
  declarations: [ShophourSellerInfoPage]
})
export class ShophourSellerInfoPageModule {}
