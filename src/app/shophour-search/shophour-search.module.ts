import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShophourSearchPageRoutingModule } from './shophour-search-routing.module';

import { ShophourSearchPage } from './shophour-search.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ShophourSearchPageRoutingModule
  ],
  declarations: [ShophourSearchPage]
})
export class ShophourSearchPageModule {}
