import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClipixTabsPageRoutingModule } from './clipix-tabs-routing.module';

import { ClipixTabsPage } from './clipix-tabs.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    IonicModule,
    TranslateModule,
    ClipixTabsPageRoutingModule
  ],
  declarations: [ClipixTabsPage]
})
export class ClipixTabsPageModule {}
