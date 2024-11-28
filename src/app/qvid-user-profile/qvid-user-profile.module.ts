import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QvidUserProfilePageRoutingModule } from './qvid-user-profile-routing.module';

import { QvidUserProfilePage } from './qvid-user-profile.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    QvidUserProfilePageRoutingModule
  ],
  declarations: [QvidUserProfilePage]
})
export class QvidUserProfilePageModule {}
