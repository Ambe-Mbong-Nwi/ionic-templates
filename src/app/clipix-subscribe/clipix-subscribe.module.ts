import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClipixSubscribePageRoutingModule } from './clipix-subscribe-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { ClipixSubscribePage } from './clipix-subscribe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ClipixSubscribePageRoutingModule
  ],
  declarations: [ClipixSubscribePage]
})
export class ClipixSubscribePageModule {}
