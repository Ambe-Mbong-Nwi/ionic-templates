import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HandyzoneMyBookingsPageRoutingModule } from './handyzone-my-bookings-routing.module';

import { HandyzoneMyBookingsPage } from './handyzone-my-bookings.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    HandyzoneMyBookingsPageRoutingModule
  ],
  declarations: [HandyzoneMyBookingsPage]
})
export class HandyzoneMyBookingsPageModule {}
