import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctoworldCartPageRoutingModule } from './doctoworld-cart-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { DoctoworldCartPage } from './doctoworld-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DoctoworldCartPageRoutingModule
  ],
  declarations: [DoctoworldCartPage]
})
export class DoctoworldCartPageModule {}
