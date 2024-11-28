import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WoochatTabsPageRoutingModule } from './woochat-tabs-routing.module';

import { WoochatTabsPage } from './woochat-tabs.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    WoochatTabsPageRoutingModule
  ],
  declarations: [WoochatTabsPage]
})
export class WoochatTabsPageModule {}
