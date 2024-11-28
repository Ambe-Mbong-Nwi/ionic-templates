import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HungerzStoresPageRoutingModule } from './hungerz-stores-routing.module';

import { HungerzStoresPage } from './hungerz-stores.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    HungerzStoresPageRoutingModule
  ],
  declarations: [HungerzStoresPage]
})
export class HungerzStoresPageModule {}
