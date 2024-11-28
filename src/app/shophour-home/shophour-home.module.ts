import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShophourHomePageRoutingModule } from './shophour-home-routing.module';

import { ShophourHomePage } from './shophour-home.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ShophourHomePageRoutingModule
  ],
  declarations: [ShophourHomePage]
})
export class ShophourHomePageModule {}
