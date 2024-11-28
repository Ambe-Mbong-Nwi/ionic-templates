import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HungerzAddReviewPageRoutingModule } from './hungerz-add-review-routing.module';

import { HungerzAddReviewPage } from './hungerz-add-review.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    HungerzAddReviewPageRoutingModule
  ],
  declarations: [HungerzAddReviewPage]
})
export class HungerzAddReviewPageModule {}
