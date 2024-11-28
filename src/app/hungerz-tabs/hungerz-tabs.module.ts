import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HungerzTabsPageRoutingModule } from './hungerz-tabs-routing.module';

import { HungerzTabsPage } from './hungerz-tabs.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    HungerzTabsPageRoutingModule
  ],
  declarations: [HungerzTabsPage]
})
export class HungerzTabsPageModule {}
