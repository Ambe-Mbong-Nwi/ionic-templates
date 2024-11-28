import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WoochatProfileInfoPageRoutingModule } from './woochat-profile-info-routing.module';

import { WoochatProfileInfoPage } from './woochat-profile-info.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    WoochatProfileInfoPageRoutingModule
  ],
  declarations: [WoochatProfileInfoPage]
})
export class WoochatProfileInfoPageModule {}
