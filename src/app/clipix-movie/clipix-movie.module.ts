import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClipixMoviePageRoutingModule } from './clipix-movie-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { ClipixMoviePage } from './clipix-movie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ClipixMoviePageRoutingModule
  ],
  declarations: [ClipixMoviePage]
})
export class ClipixMoviePageModule {}
