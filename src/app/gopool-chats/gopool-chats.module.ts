import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GopoolChatsPageRoutingModule } from './gopool-chats-routing.module';

import { GopoolChatsPage } from './gopool-chats.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    GopoolChatsPageRoutingModule
  ],
  declarations: [GopoolChatsPage]
})
export class GopoolChatsPageModule {}
