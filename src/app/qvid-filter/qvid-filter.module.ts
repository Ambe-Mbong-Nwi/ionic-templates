import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QvidFilterPageRoutingModule } from './qvid-filter-routing.module';

import { QvidFilterPage } from './qvid-filter.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    QvidFilterPageRoutingModule
  ],
  declarations: [QvidFilterPage]
})
export class QvidFilterPageModule {}
