import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QvidVideoviewPageRoutingModule } from './qvid-videoview-routing.module';

import { QvidVideoviewPage } from './qvid-videoview.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    QvidVideoviewPageRoutingModule
  ],
  declarations: [QvidVideoviewPage]
})
export class QvidVideoviewPageModule {}
