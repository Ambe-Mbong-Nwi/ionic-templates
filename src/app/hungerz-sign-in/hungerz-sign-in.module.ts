import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HungerzSignInPageRoutingModule } from './hungerz-sign-in-routing.module';

import { HungerzSignInPage } from './hungerz-sign-in.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    HungerzSignInPageRoutingModule
  ],
  declarations: [HungerzSignInPage]
})
export class HungerzSignInPageModule {}
