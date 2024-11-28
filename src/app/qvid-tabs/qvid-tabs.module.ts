import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QvidTabsPageRoutingModule } from './qvid-tabs-routing.module';

import { QvidTabsPage } from './qvid-tabs.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    QvidTabsPageRoutingModule
  ],
  declarations: [QvidTabsPage]
})
export class QvidTabsPageModule {}
