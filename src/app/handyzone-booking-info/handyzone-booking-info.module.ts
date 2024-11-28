import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HandyzoneBookingInfoPageRoutingModule } from './handyzone-booking-info-routing.module';

import { HandyzoneBookingInfoPage } from './handyzone-booking-info.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    HandyzoneBookingInfoPageRoutingModule
  ],
  declarations: [HandyzoneBookingInfoPage]
})
export class HandyzoneBookingInfoPageModule {}
