import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShophourMyOrdersPageRoutingModule } from './shophour-my-orders-routing.module';

import { ShophourMyOrdersPage } from './shophour-my-orders.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ShophourMyOrdersPageRoutingModule
  ],
  declarations: [ShophourMyOrdersPage]
})
export class ShophourMyOrdersPageModule {}
