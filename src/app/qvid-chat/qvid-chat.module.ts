import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QvidChatPageRoutingModule } from './qvid-chat-routing.module';

import { QvidChatPage } from './qvid-chat.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    QvidChatPageRoutingModule
  ],
  declarations: [QvidChatPage]
})
export class QvidChatPageModule {}
