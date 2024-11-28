import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HungerzWalletPageRoutingModule } from './hungerz-wallet-routing.module';

import { HungerzWalletPage } from './hungerz-wallet.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    HungerzWalletPageRoutingModule
  ],
  declarations: [HungerzWalletPage]
})
export class HungerzWalletPageModule {}
