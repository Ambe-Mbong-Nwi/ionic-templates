import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClipixAccountPageRoutingModule } from './clipix-account-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { ClipixAccountPage } from './clipix-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ClipixAccountPageRoutingModule
  ],
  declarations: [ClipixAccountPage]
})
export class ClipixAccountPageModule {}
