import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShophourSearchResultPageRoutingModule } from './shophour-search-result-routing.module';

import { ShophourSearchResultPage } from './shophour-search-result.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ShophourSearchResultPageRoutingModule
  ],
  declarations: [ShophourSearchResultPage]
})
export class ShophourSearchResultPageModule {}
