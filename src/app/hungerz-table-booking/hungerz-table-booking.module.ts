import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
  
import { HungerzTableBookingPageRoutingModule } from './hungerz-table-booking-routing.module';

import { HungerzTableBookingPage } from './hungerz-table-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    HungerzTableBookingPageRoutingModule
  ],
  declarations: [HungerzTableBookingPage]
})
export class HungerzTableBookingPageModule {}
