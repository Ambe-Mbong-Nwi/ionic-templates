import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GropotSubCategoriesPageRoutingModule } from './gropot-sub-categories-routing.module';

import { GropotSubCategoriesPage } from './gropot-sub-categories.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    GropotSubCategoriesPageRoutingModule
  ],
  declarations: [GropotSubCategoriesPage]
})
export class GropotSubCategoriesPageModule {}
