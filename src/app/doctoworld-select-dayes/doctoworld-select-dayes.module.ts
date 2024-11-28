import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { DoctoworldSelectDayesPageRoutingModule } from './doctoworld-select-dayes-routing.module';

import { DoctoworldSelectDayesPage } from './doctoworld-select-dayes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DoctoworldSelectDayesPageRoutingModule
  ],
  declarations: [DoctoworldSelectDayesPage]
})
export class DoctoworldSelectDayesPageModule {}
