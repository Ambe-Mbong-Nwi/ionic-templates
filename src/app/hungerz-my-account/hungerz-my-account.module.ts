import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HungerzMyAccountPageRoutingModule } from './hungerz-my-account-routing.module';

import { HungerzMyAccountPage } from './hungerz-my-account.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    HungerzMyAccountPageRoutingModule
  ],
  declarations: [HungerzMyAccountPage]
})
export class HungerzMyAccountPageModule {}
