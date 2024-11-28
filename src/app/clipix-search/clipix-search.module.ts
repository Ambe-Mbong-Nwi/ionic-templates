import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClipixSearchPageRoutingModule } from './clipix-search-routing.module';

import { TranslateModule } from '@ngx-translate/core';


import { ClipixSearchPage } from './clipix-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ClipixSearchPageRoutingModule
  ],
  declarations: [ClipixSearchPage]
})
export class ClipixSearchPageModule { }
