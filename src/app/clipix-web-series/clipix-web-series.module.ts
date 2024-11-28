import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClipixWebSeriesPageRoutingModule } from './clipix-web-series-routing.module';

import { TranslateModule } from '@ngx-translate/core';
  
import { ClipixWebSeriesPage } from './clipix-web-series.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ClipixWebSeriesPageRoutingModule
  ],
  declarations: [ClipixWebSeriesPage]
})
export class ClipixWebSeriesPageModule {}
