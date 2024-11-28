import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QvidSignInPageRoutingModule } from './qvid-sign-in-routing.module';

import { QvidSignInPage } from './qvid-sign-in.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    QvidSignInPageRoutingModule
  ],
  declarations: [QvidSignInPage]
})
export class QvidSignInPageModule {}
