import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GropotCategoriesPageRoutingModule } from './gropot-categories-routing.module';

import { GropotCategoriesPage } from './gropot-categories.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    GropotCategoriesPageRoutingModule
  ],
  declarations: [GropotCategoriesPage]
})
export class GropotCategoriesPageModule {}
