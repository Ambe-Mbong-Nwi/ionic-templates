import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QvidMyProfilePageRoutingModule } from './qvid-my-profile-routing.module';

import { QvidMyProfilePage } from './qvid-my-profile.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    QvidMyProfilePageRoutingModule
  ],
  declarations: [QvidMyProfilePage]
})
export class QvidMyProfilePageModule {}
