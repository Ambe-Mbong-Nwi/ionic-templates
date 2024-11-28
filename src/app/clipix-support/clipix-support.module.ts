import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClipixSupportPageRoutingModule } from './clipix-support-routing.module';

import { TranslateModule } from '@ngx-translate/core';
  
import { ClipixSupportPage } from './clipix-support.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ClipixSupportPageRoutingModule
  ],
  declarations: [ClipixSupportPage]
})
export class ClipixSupportPageModule {}
