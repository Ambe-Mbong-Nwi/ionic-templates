import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';

import { ClipixHomePageRoutingModule } from './clipix-home-routing.module';

import { ClipixHomePage } from './clipix-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ClipixHomePageRoutingModule
  ],
  declarations: [ClipixHomePage]
})
export class ClipixHomePageModule { }
