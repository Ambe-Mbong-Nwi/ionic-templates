import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GopoolWalletPageRoutingModule } from './gopool-wallet-routing.module';

import { GopoolWalletPage } from './gopool-wallet.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    GopoolWalletPageRoutingModule
  ],
  declarations: [GopoolWalletPage]
})
export class GopoolWalletPageModule {}
