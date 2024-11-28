import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GopoolRateRideTakerPageRoutingModule } from './gopool-rate-ride-taker-routing.module';

import { GopoolRateRideTakerPage } from './gopool-rate-ride-taker.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    GopoolRateRideTakerPageRoutingModule
  ],
  declarations: [GopoolRateRideTakerPage]
})
export class GopoolRateRideTakerPageModule {}
