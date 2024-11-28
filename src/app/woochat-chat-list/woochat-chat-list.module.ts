import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WoochatChatListPageRoutingModule } from './woochat-chat-list-routing.module';

import { WoochatChatListPage } from './woochat-chat-list.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    WoochatChatListPageRoutingModule
  ],
  declarations: [WoochatChatListPage]
})
export class WoochatChatListPageModule {}
