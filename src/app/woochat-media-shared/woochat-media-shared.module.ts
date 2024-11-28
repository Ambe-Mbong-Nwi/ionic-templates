import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WoochatMediaSharedPageRoutingModule } from './woochat-media-shared-routing.module';

import { WoochatMediaSharedPage } from './woochat-media-shared.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    WoochatMediaSharedPageRoutingModule
  ],
  declarations: [WoochatMediaSharedPage]
})
export class WoochatMediaSharedPageModule {}
