import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WoochatSignInPageRoutingModule } from './woochat-sign-in-routing.module';

import { WoochatSignInPage } from './woochat-sign-in.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    WoochatSignInPageRoutingModule
  ],
  declarations: [WoochatSignInPage]
})
export class WoochatSignInPageModule {}
