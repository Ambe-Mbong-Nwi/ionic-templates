import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HungerzStorePageRoutingModule } from './hungerz-store-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { HungerzStorePage } from './hungerz-store.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    HungerzStorePageRoutingModule
  ],
  declarations: [HungerzStorePage]
})
export class HungerzStorePageModule {}
