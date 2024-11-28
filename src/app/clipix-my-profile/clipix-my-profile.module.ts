import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClipixMyProfilePageRoutingModule } from './clipix-my-profile-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { ClipixMyProfilePage } from './clipix-my-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ClipixMyProfilePageRoutingModule
  ],
  declarations: [ClipixMyProfilePage]
})
export class ClipixMyProfilePageModule { }
