import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GropotSelectLocationPageRoutingModule } from './gropot-select-location-routing.module';

import { GropotSelectLocationPage } from './gropot-select-location.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    GropotSelectLocationPageRoutingModule
  ],
  declarations: [GropotSelectLocationPage]
})
export class GropotSelectLocationPageModule {}
