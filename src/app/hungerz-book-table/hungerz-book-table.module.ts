import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HungerzBookTablePageRoutingModule } from './hungerz-book-table-routing.module';

import { HungerzBookTablePage } from './hungerz-book-table.page';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    HungerzBookTablePageRoutingModule
  ],
  declarations: [HungerzBookTablePage]
})
export class HungerzBookTablePageModule {}
