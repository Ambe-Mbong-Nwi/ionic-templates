import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HandyzoneSearchPageRoutingModule } from './handyzone-search-routing.module';

import { HandyzoneSearchPage } from './handyzone-search.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    HandyzoneSearchPageRoutingModule
  ],
  declarations: [HandyzoneSearchPage]
})
export class HandyzoneSearchPageModule {}
