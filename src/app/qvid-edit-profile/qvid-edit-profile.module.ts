import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QvidEditProfilePageRoutingModule } from './qvid-edit-profile-routing.module';

import { QvidEditProfilePage } from './qvid-edit-profile.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    QvidEditProfilePageRoutingModule
  ],
  declarations: [QvidEditProfilePage]
})
export class QvidEditProfilePageModule {}
