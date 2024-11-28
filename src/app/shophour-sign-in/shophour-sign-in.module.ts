import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShophourSignInPageRoutingModule } from './shophour-sign-in-routing.module';

import { ShophourSignInPage } from './shophour-sign-in.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ShophourSignInPageRoutingModule
  ],
  declarations: [ShophourSignInPage]
})
export class ShophourSignInPageModule {}
