import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QvidExplorePageRoutingModule } from './qvid-explore-routing.module';

import { QvidExplorePage } from './qvid-explore.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    QvidExplorePageRoutingModule
  ],
  declarations: [QvidExplorePage]
})
export class QvidExplorePageModule {}
