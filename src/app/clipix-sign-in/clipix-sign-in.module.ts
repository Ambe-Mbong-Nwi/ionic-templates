import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClipixSignInPageRoutingModule } from './clipix-sign-in-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { ClipixSignInPage } from './clipix-sign-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ClipixSignInPageRoutingModule
  ],
  declarations: [ClipixSignInPage]
})
export class ClipixSignInPageModule { }
