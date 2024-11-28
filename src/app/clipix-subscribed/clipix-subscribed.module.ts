import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';

import { ClipixSubscribedPageRoutingModule } from './clipix-subscribed-routing.module';

import { ClipixSubscribedPage } from './clipix-subscribed.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ClipixSubscribedPageRoutingModule
  ],
  declarations: [ClipixSubscribedPage]
})
export class ClipixSubscribedPageModule {}
