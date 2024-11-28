import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctoworldSignInPageRoutingModule } from './doctoworld-sign-in-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { DoctoworldSignInPage } from './doctoworld-sign-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DoctoworldSignInPageRoutingModule
  ],
  declarations: [DoctoworldSignInPage]
})
export class DoctoworldSignInPageModule { }
