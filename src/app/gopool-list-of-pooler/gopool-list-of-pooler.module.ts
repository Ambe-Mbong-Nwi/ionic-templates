import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GopoolListOfPoolerPageRoutingModule } from './gopool-list-of-pooler-routing.module';

import { TranslateModule } from '@ngx-translate/core';
  
import { GopoolListOfPoolerPage } from './gopool-list-of-pooler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    GopoolListOfPoolerPageRoutingModule
  ],
  declarations: [GopoolListOfPoolerPage]
})
export class GopoolListOfPoolerPageModule {}
