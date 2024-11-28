import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WoochatGroupChattingPageRoutingModule } from './woochat-group-chatting-routing.module';

import { WoochatGroupChattingPage } from './woochat-group-chatting.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    WoochatGroupChattingPageRoutingModule
  ],
  declarations: [WoochatGroupChattingPage]
})
export class WoochatGroupChattingPageModule {}
