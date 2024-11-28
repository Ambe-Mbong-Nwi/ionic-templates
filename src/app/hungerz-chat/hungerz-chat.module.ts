import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HungerzChatPageRoutingModule } from './hungerz-chat-routing.module';

import { HungerzChatPage } from './hungerz-chat.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    HungerzChatPageRoutingModule
  ],
  declarations: [HungerzChatPage]
})
export class HungerzChatPageModule {}
