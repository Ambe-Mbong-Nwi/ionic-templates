import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WoochatVoicecallPageRoutingModule } from './woochat-voicecall-routing.module';

import { WoochatVoicecallPage } from './woochat-voicecall.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    WoochatVoicecallPageRoutingModule
  ],
  declarations: [WoochatVoicecallPage]
})
export class WoochatVoicecallPageModule {}
