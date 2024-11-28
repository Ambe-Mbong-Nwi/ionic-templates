import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HandyzoneWorkRatingsPageRoutingModule } from './handyzone-work-ratings-routing.module';

import { HandyzoneWorkRatingsPage } from './handyzone-work-ratings.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    HandyzoneWorkRatingsPageRoutingModule
  ],
  declarations: [HandyzoneWorkRatingsPage]
})
export class HandyzoneWorkRatingsPageModule {}
