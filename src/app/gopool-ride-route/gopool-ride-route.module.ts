import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GopoolRideRoutePageRoutingModule } from './gopool-ride-route-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { GopoolRideRoutePage } from './gopool-ride-route.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    GopoolRideRoutePageRoutingModule
  ],
  declarations: [GopoolRideRoutePage]
})
export class GopoolRideRoutePageModule {}
