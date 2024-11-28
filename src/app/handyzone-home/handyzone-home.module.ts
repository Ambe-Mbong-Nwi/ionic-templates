import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HandyzoneHomePageRoutingModule } from './handyzone-home-routing.module';

import { HandyzoneHomePage } from './handyzone-home.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    HandyzoneHomePageRoutingModule
  ],
  declarations: [HandyzoneHomePage]
})
export class HandyzoneHomePageModule {}
