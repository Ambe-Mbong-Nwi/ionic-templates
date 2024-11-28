import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GropotHomePageRoutingModule } from './gropot-home-routing.module';

import { GropotHomePage } from './gropot-home.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    GropotHomePageRoutingModule
  ],
  declarations: [GropotHomePage]
})
export class GropotHomePageModule {}
