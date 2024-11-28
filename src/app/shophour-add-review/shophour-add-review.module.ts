import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShophourAddReviewPageRoutingModule } from './shophour-add-review-routing.module';

import { ShophourAddReviewPage } from './shophour-add-review.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ShophourAddReviewPageRoutingModule
  ],
  declarations: [ShophourAddReviewPage]
})
export class ShophourAddReviewPageModule {}
