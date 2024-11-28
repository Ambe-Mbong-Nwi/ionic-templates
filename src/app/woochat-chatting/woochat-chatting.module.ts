import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WoochatChattingPageRoutingModule } from './woochat-chatting-routing.module';

import { WoochatChattingPage } from './woochat-chatting.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    WoochatChattingPageRoutingModule
  ],
  declarations: [WoochatChattingPage]
})
export class WoochatChattingPageModule {}
