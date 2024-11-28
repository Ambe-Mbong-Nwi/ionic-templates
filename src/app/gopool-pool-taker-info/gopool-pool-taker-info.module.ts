import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GopoolPoolTakerInfoPageRoutingModule } from './gopool-pool-taker-info-routing.module';

import { GopoolPoolTakerInfoPage } from './gopool-pool-taker-info.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    GopoolPoolTakerInfoPageRoutingModule
  ],
  declarations: [GopoolPoolTakerInfoPage]
})
export class GopoolPoolTakerInfoPageModule {}
