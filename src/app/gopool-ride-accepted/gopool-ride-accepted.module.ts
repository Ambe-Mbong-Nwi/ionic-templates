import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GopoolRideAcceptedPageRoutingModule } from './gopool-ride-accepted-routing.module';

import { GopoolRideAcceptedPage } from './gopool-ride-accepted.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    GopoolRideAcceptedPageRoutingModule
  ],
  declarations: [GopoolRideAcceptedPage]
})
export class GopoolRideAcceptedPageModule {}
