import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GopoolSignInPageRoutingModule } from './gopool-sign-in-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { GopoolSignInPage } from './gopool-sign-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    GopoolSignInPageRoutingModule
  ],
  declarations: [GopoolSignInPage]
})
export class GopoolSignInPageModule {}
