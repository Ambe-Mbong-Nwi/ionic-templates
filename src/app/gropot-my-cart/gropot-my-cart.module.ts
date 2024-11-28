import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GropotMyCartPageRoutingModule } from './gropot-my-cart-routing.module';

import { GropotMyCartPage } from './gropot-my-cart.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    GropotMyCartPageRoutingModule
  ],
  declarations: [GropotMyCartPage]
})
export class GropotMyCartPageModule {}
