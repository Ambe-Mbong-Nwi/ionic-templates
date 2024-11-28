import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HandyzoneSupportPageRoutingModule } from './handyzone-support-routing.module';

import { HandyzoneSupportPage } from './handyzone-support.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    HandyzoneSupportPageRoutingModule
  ],
  declarations: [HandyzoneSupportPage]
})
export class HandyzoneSupportPageModule {}
