import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GopoolTabsPageRoutingModule } from './gopool-tabs-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { GopoolTabsPage } from './gopool-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    GopoolTabsPageRoutingModule
  ],
  declarations: [GopoolTabsPage]
})
export class GopoolTabsPageModule {}
