import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HungerzOrderDetailPageRoutingModule } from './hungerz-order-detail-routing.module';

import { HungerzOrderDetailPage } from './hungerz-order-detail.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    HungerzOrderDetailPageRoutingModule
  ],
  declarations: [HungerzOrderDetailPage]
})
export class HungerzOrderDetailPageModule {}
