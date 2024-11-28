import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HandyzoneSignInPageRoutingModule } from './handyzone-sign-in-routing.module';

import { HandyzoneSignInPage } from './handyzone-sign-in.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    HandyzoneSignInPageRoutingModule
  ],
  declarations: [HandyzoneSignInPage]
})
export class HandyzoneSignInPageModule {}
