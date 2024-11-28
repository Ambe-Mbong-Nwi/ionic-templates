import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QvidSearchResultPageRoutingModule } from './qvid-search-result-routing.module';

import { QvidSearchResultPage } from './qvid-search-result.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    QvidSearchResultPageRoutingModule
  ],
  declarations: [QvidSearchResultPage]
})
export class QvidSearchResultPageModule {}
