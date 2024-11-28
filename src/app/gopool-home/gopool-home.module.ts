import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GopoolHomePageRoutingModule } from './gopool-home-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { GopoolHomePage } from './gopool-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    GopoolHomePageRoutingModule
  ],
  declarations: [GopoolHomePage]
})
export class GopoolHomePageModule { }
