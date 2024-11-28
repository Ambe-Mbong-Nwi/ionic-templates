import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GopoolMyTripsPageRoutingModule } from './gopool-my-trips-routing.module';

import { GopoolMyTripsPage } from './gopool-my-trips.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    GopoolMyTripsPageRoutingModule
  ],
  declarations: [GopoolMyTripsPage]
})
export class GopoolMyTripsPageModule {}
