import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GopoolMyProfilePageRoutingModule } from './gopool-my-profile-routing.module';

import { GopoolMyProfilePage } from './gopool-my-profile.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    GopoolMyProfilePageRoutingModule
  ],
  declarations: [GopoolMyProfilePage]
})
export class GopoolMyProfilePageModule {}
