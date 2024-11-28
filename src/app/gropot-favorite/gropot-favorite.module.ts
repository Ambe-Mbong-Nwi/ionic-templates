import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GropotFavoritePageRoutingModule } from './gropot-favorite-routing.module';

import { GropotFavoritePage } from './gropot-favorite.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    GropotFavoritePageRoutingModule
  ],
  declarations: [GropotFavoritePage]
})
export class GropotFavoritePageModule {}
