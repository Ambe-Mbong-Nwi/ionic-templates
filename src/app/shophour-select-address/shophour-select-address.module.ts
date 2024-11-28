import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShophourSelectAddressPageRoutingModule } from './shophour-select-address-routing.module';

import { ShophourSelectAddressPage } from './shophour-select-address.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ShophourSelectAddressPageRoutingModule
  ],
  declarations: [ShophourSelectAddressPage]
})
export class ShophourSelectAddressPageModule {}
