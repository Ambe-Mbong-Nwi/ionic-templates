import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HungerzVariationSelectionPageRoutingModule } from './hungerz-variation-selection-routing.module';

import { HungerzVariationSelectionPage } from './hungerz-variation-selection.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    HungerzVariationSelectionPageRoutingModule
  ],
  declarations: [HungerzVariationSelectionPage]
})
export class HungerzVariationSelectionPageModule {}
