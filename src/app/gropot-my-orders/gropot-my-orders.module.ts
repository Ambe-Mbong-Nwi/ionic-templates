import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GropotMyOrdersPageRoutingModule } from './gropot-my-orders-routing.module';

import { GropotMyOrdersPage } from './gropot-my-orders.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    GropotMyOrdersPageRoutingModule
  ],
  declarations: [GropotMyOrdersPage]
})
export class GropotMyOrdersPageModule {}
