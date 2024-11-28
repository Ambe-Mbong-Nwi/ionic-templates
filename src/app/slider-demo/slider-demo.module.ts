import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SliderDemoPageRoutingModule } from './slider-demo-routing.module';

import { TranslateModule } from '@ngx-translate/core';
  
import { SliderDemoPage } from './slider-demo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,     
    SliderDemoPageRoutingModule
  ],
  declarations: [SliderDemoPage]
})
export class SliderDemoPageModule {}
