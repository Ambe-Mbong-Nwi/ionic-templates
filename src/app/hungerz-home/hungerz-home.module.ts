import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HungerzHomePageRoutingModule } from './hungerz-home-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { HungerzHomePage } from './hungerz-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    HungerzHomePageRoutingModule
  ],
  declarations: [HungerzHomePage]
})
export class HungerzHomePageModule {}
