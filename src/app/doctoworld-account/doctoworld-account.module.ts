import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctoworldAccountPageRoutingModule } from './doctoworld-account-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { DoctoworldAccountPage } from './doctoworld-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DoctoworldAccountPageRoutingModule
  ],
  declarations: [DoctoworldAccountPage]
})
export class DoctoworldAccountPageModule {}
