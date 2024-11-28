import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WoochatGrupListPageRoutingModule } from './woochat-grup-list-routing.module';

import { WoochatGrupListPage } from './woochat-grup-list.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    WoochatGrupListPageRoutingModule
  ],
  declarations: [WoochatGrupListPage]
})
export class WoochatGrupListPageModule {}
