import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HungerzRestaurantItemsPageRoutingModule } from './hungerz-restaurant-items-routing.module';

import { HungerzRestaurantItemsPage } from './hungerz-restaurant-items.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    HungerzRestaurantItemsPageRoutingModule
  ],
  declarations: [HungerzRestaurantItemsPage]
})
export class HungerzRestaurantItemsPageModule {}
