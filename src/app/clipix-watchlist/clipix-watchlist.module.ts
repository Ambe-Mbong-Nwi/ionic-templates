import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClipixWatchlistPageRoutingModule } from './clipix-watchlist-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { ClipixWatchlistPage } from './clipix-watchlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ClipixWatchlistPageRoutingModule
  ],
  declarations: [ClipixWatchlistPage]
})
export class ClipixWatchlistPageModule {}
