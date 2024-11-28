import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HandyzoneProviderProfilePageRoutingModule } from './handyzone-provider-profile-routing.module';

import { HandyzoneProviderProfilePage } from './handyzone-provider-profile.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    HandyzoneProviderProfilePageRoutingModule
  ],
  declarations: [HandyzoneProviderProfilePage]
})
export class HandyzoneProviderProfilePageModule {}
