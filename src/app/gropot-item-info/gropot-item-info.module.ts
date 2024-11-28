import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GropotItemInfoPageRoutingModule } from './gropot-item-info-routing.module';

import { GropotItemInfoPage } from './gropot-item-info.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    GropotItemInfoPageRoutingModule
  ],
  declarations: [GropotItemInfoPage]
})
export class GropotItemInfoPageModule {}
