import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GopoolPoolInfoPageRoutingModule } from './gopool-pool-info-routing.module';

import { GopoolPoolInfoPage } from './gopool-pool-info.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    GopoolPoolInfoPageRoutingModule
  ],
  declarations: [GopoolPoolInfoPage]
})
export class GopoolPoolInfoPageModule {}
