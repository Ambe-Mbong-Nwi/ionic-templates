import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';

import { HungerzOffersPageRoutingModule } from './hungerz-offers-routing.module';

import { HungerzOffersPage } from './hungerz-offers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    HungerzOffersPageRoutingModule
  ],
  declarations: [HungerzOffersPage]
})
export class HungerzOffersPageModule {}
