import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HandyzoneConversationPageRoutingModule } from './handyzone-conversation-routing.module';

import { HandyzoneConversationPage } from './handyzone-conversation.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    HandyzoneConversationPageRoutingModule
  ],
  declarations: [HandyzoneConversationPage]
})
export class HandyzoneConversationPageModule {}
