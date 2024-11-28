import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HandyzoneAccountPageRoutingModule } from './handyzone-account-routing.module';

import { HandyzoneAccountPage } from './handyzone-account.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    HandyzoneAccountPageRoutingModule
  ],
  declarations: [HandyzoneAccountPage]
})
export class HandyzoneAccountPageModule {}
