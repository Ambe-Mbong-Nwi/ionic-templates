import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QvidNotificationPageRoutingModule } from './qvid-notification-routing.module';

import { QvidNotificationPage } from './qvid-notification.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    QvidNotificationPageRoutingModule
  ],
  declarations: [QvidNotificationPage]
})
export class QvidNotificationPageModule {}
