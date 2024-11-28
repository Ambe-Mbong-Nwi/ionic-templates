import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WoochatCallLogsPageRoutingModule } from './woochat-call-logs-routing.module';

import { WoochatCallLogsPage } from './woochat-call-logs.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    WoochatCallLogsPageRoutingModule
  ],
  declarations: [WoochatCallLogsPage]
})
export class WoochatCallLogsPageModule {}
