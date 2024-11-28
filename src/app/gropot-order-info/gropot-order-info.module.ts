import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GropotOrderInfoPageRoutingModule } from './gropot-order-info-routing.module';

import { GropotOrderInfoPage } from './gropot-order-info.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    GropotOrderInfoPageRoutingModule
  ],
  declarations: [GropotOrderInfoPage]
})
export class GropotOrderInfoPageModule {}
