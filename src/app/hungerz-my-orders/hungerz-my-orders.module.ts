import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HungerzMyOrdersPageRoutingModule } from './hungerz-my-orders-routing.module';

import { HungerzMyOrdersPage } from './hungerz-my-orders.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    HungerzMyOrdersPageRoutingModule
  ],
  declarations: [HungerzMyOrdersPage]
})
export class HungerzMyOrdersPageModule {}
