import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GopoolPoolTakerRequestPageRoutingModule } from './gopool-pool-taker-request-routing.module';

import { GopoolPoolTakerRequestPage } from './gopool-pool-taker-request.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    GopoolPoolTakerRequestPageRoutingModule
  ],
  declarations: [GopoolPoolTakerRequestPage]
})
export class GopoolPoolTakerRequestPageModule {}
