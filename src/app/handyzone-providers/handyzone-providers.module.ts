import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HandyzoneProvidersPageRoutingModule } from './handyzone-providers-routing.module';

import { HandyzoneProvidersPage } from './handyzone-providers.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    HandyzoneProvidersPageRoutingModule
  ],
  declarations: [HandyzoneProvidersPage]
})
export class HandyzoneProvidersPageModule {}
