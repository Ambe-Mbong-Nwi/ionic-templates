import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HungerzOrderingMethodPageRoutingModule } from './hungerz-ordering-method-routing.module';

import { HungerzOrderingMethodPage } from './hungerz-ordering-method.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    HungerzOrderingMethodPageRoutingModule
  ],
  declarations: [HungerzOrderingMethodPage]
})
export class HungerzOrderingMethodPageModule {}
