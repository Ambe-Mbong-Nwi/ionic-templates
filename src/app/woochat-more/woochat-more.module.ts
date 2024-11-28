import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WoochatMorePageRoutingModule } from './woochat-more-routing.module';

import { WoochatMorePage } from './woochat-more.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    WoochatMorePageRoutingModule
  ],
  declarations: [WoochatMorePage]
})
export class WoochatMorePageModule {}
