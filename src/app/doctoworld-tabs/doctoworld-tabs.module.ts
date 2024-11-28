import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctoworldTabsPageRoutingModule } from './doctoworld-tabs-routing.module';

import { TranslateModule } from '@ngx-translate/core';
  
import { DoctoworldTabsPage } from './doctoworld-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    IonicModule,
    TranslateModule,
    DoctoworldTabsPageRoutingModule
  ],
  declarations: [DoctoworldTabsPage]
})
export class DoctoworldTabsPageModule {}
