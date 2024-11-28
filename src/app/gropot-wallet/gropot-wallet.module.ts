import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GropotWalletPageRoutingModule } from './gropot-wallet-routing.module';

import { GropotWalletPage } from './gropot-wallet.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    GropotWalletPageRoutingModule
  ],
  declarations: [GropotWalletPage]
})
export class GropotWalletPageModule {}
