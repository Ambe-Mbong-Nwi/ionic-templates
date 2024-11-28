import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HandyzoneBookingPageRoutingModule } from './handyzone-booking-routing.module';

import { HandyzoneBookingPage } from './handyzone-booking.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    HandyzoneBookingPageRoutingModule
  ],
  declarations: [HandyzoneBookingPage]
})
export class HandyzoneBookingPageModule {}
