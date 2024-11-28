import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HandyzoneServicesPageRoutingModule } from './handyzone-services-routing.module';

import { HandyzoneServicesPage } from './handyzone-services.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    HandyzoneServicesPageRoutingModule
  ],
  declarations: [HandyzoneServicesPage]
})
export class HandyzoneServicesPageModule {}
