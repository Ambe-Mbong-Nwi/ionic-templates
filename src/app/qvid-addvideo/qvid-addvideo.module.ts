import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QvidAddvideoPageRoutingModule } from './qvid-addvideo-routing.module';

import { QvidAddvideoPage } from './qvid-addvideo.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    QvidAddvideoPageRoutingModule
  ],
  declarations: [QvidAddvideoPage]
})
export class QvidAddvideoPageModule {}
