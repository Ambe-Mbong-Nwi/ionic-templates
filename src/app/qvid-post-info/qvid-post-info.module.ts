import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QvidPostInfoPageRoutingModule } from './qvid-post-info-routing.module';

import { QvidPostInfoPage } from './qvid-post-info.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    QvidPostInfoPageRoutingModule
  ],
  declarations: [QvidPostInfoPage]
})
export class QvidPostInfoPageModule {}
