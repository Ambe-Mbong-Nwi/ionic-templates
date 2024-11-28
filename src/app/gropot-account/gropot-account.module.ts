import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GropotAccountPageRoutingModule } from './gropot-account-routing.module';

import { GropotAccountPage } from './gropot-account.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    GropotAccountPageRoutingModule
  ],
  declarations: [GropotAccountPage]
})
export class GropotAccountPageModule {}
