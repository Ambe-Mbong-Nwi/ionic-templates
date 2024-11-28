import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GropotCouponPageRoutingModule } from './gropot-coupon-routing.module';

import { GropotCouponPage } from './gropot-coupon.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    GropotCouponPageRoutingModule
  ],
  declarations: [GropotCouponPage]
})
export class GropotCouponPageModule {}
