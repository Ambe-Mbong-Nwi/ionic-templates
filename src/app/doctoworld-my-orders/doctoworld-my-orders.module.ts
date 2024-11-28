import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';

import { DoctoworldMyOrdersPageRoutingModule } from './doctoworld-my-orders-routing.module';

import { DoctoworldMyOrdersPage } from './doctoworld-my-orders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DoctoworldMyOrdersPageRoutingModule
  ],
  declarations: [DoctoworldMyOrdersPage]
})
export class DoctoworldMyOrdersPageModule { }
