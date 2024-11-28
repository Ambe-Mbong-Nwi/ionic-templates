import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClipixSignUpPageRoutingModule } from './clipix-sign-up-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { ClipixSignUpPage } from './clipix-sign-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ClipixSignUpPageRoutingModule
  ],
  declarations: [ClipixSignUpPage]
})
export class ClipixSignUpPageModule {}
