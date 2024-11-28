import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WoochatGroupInfoPageRoutingModule } from './woochat-group-info-routing.module';

import { WoochatGroupInfoPage } from './woochat-group-info.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    WoochatGroupInfoPageRoutingModule
  ],
  declarations: [WoochatGroupInfoPage]
})
export class WoochatGroupInfoPageModule {}
