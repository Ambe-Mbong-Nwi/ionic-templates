import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HandyzoneChatListPageRoutingModule } from './handyzone-chat-list-routing.module';

import { HandyzoneChatListPage } from './handyzone-chat-list.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    HandyzoneChatListPageRoutingModule
  ],
  declarations: [HandyzoneChatListPage]
})
export class HandyzoneChatListPageModule {}
