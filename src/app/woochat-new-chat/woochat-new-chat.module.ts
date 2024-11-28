import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WoochatNewChatPageRoutingModule } from './woochat-new-chat-routing.module';

import { WoochatNewChatPage } from './woochat-new-chat.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    WoochatNewChatPageRoutingModule
  ],
  declarations: [WoochatNewChatPage]
})
export class WoochatNewChatPageModule {}
