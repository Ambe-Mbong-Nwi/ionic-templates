import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GopoolSelectLocationPageRoutingModule } from './gopool-select-location-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { GopoolSelectLocationPage } from './gopool-select-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    GopoolSelectLocationPageRoutingModule
  ],
  declarations: [GopoolSelectLocationPage]
})
export class GopoolSelectLocationPageModule {}
