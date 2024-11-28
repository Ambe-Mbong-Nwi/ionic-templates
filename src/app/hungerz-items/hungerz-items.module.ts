import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';

import { HungerzItemsPageRoutingModule } from './hungerz-items-routing.module';

import { HungerzItemsPage } from './hungerz-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    HungerzItemsPageRoutingModule
  ],
  declarations: [HungerzItemsPage]
})
export class HungerzItemsPageModule {}
