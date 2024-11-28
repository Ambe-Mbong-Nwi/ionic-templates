import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HandyzoneWalletPageRoutingModule } from './handyzone-wallet-routing.module';

import { HandyzoneWalletPage } from './handyzone-wallet.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    HandyzoneWalletPageRoutingModule
  ],
  declarations: [HandyzoneWalletPage]
})
export class HandyzoneWalletPageModule {}
