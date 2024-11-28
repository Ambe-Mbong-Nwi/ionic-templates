import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GropotSignInPageRoutingModule } from './gropot-sign-in-routing.module';

import { GropotSignInPage } from './gropot-sign-in.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    GropotSignInPageRoutingModule
  ],
  declarations: [GropotSignInPage]
})
export class GropotSignInPageModule {}
