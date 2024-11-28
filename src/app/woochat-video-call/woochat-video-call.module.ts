import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WoochatVideoCallPageRoutingModule } from './woochat-video-call-routing.module';

import { WoochatVideoCallPage } from './woochat-video-call.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    WoochatVideoCallPageRoutingModule
  ],
  declarations: [WoochatVideoCallPage]
})
export class WoochatVideoCallPageModule {}
