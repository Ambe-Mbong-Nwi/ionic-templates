import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';

import { DoctoworldWalletPageRoutingModule } from './doctoworld-wallet-routing.module';

import { DoctoworldWalletPage } from './doctoworld-wallet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DoctoworldWalletPageRoutingModule
  ],
  declarations: [DoctoworldWalletPage]
})
export class DoctoworldWalletPageModule { }
