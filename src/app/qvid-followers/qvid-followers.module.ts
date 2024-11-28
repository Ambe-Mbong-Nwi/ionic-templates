import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QvidFollowersPageRoutingModule } from './qvid-followers-routing.module';

import { QvidFollowersPage } from './qvid-followers.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    QvidFollowersPageRoutingModule
  ],
  declarations: [QvidFollowersPage]
})
export class QvidFollowersPageModule {}
