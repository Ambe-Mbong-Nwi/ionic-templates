import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClipixSettingsPageRoutingModule } from './clipix-settings-routing.module';

import { TranslateModule } from '@ngx-translate/core';


import { ClipixSettingsPage } from './clipix-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ClipixSettingsPageRoutingModule
  ],
  declarations: [ClipixSettingsPage]
})
export class ClipixSettingsPageModule { }
