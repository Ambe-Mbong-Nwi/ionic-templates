import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GopoolConversationPageRoutingModule } from './gopool-conversation-routing.module';

import { GopoolConversationPage } from './gopool-conversation.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    GopoolConversationPageRoutingModule
  ],
  declarations: [GopoolConversationPage]
})
export class GopoolConversationPageModule {}
