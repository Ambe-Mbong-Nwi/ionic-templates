import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GropotSupportPageRoutingModule } from './gropot-support-routing.module';

import { GropotSupportPage } from './gropot-support.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    GropotSupportPageRoutingModule
  ],
  declarations: [GropotSupportPage]
})
export class GropotSupportPageModule {}
