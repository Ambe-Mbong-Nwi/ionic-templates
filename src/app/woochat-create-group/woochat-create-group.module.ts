import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WoochatCreateGroupPageRoutingModule } from './woochat-create-group-routing.module';

import { WoochatCreateGroupPage } from './woochat-create-group.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    WoochatCreateGroupPageRoutingModule
  ],
  declarations: [WoochatCreateGroupPage]
})
export class WoochatCreateGroupPageModule {}
