import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShophourReviewsPageRoutingModule } from './shophour-reviews-routing.module';

import { ShophourReviewsPage } from './shophour-reviews.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ShophourReviewsPageRoutingModule
  ],
  declarations: [ShophourReviewsPage]
})
export class ShophourReviewsPageModule {}
