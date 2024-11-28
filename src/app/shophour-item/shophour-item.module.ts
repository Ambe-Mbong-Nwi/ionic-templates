import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShophourItemPageRoutingModule } from './shophour-item-routing.module';

import { ShophourItemPage } from './shophour-item.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ShophourItemPageRoutingModule
  ],
  declarations: [ShophourItemPage]
})
export class ShophourItemPageModule {}
