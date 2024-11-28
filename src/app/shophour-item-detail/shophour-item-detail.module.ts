import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShophourItemDetailPageRoutingModule } from './shophour-item-detail-routing.module';

import { ShophourItemDetailPage } from './shophour-item-detail.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ShophourItemDetailPageRoutingModule
  ],
  declarations: [ShophourItemDetailPage]
})
export class ShophourItemDetailPageModule {}
