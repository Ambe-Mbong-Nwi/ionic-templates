import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShophourOffersPageRoutingModule } from './shophour-offers-routing.module';

import { ShophourOffersPage } from './shophour-offers.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ShophourOffersPageRoutingModule
  ],
  declarations: [ShophourOffersPage]
})
export class ShophourOffersPageModule {}
