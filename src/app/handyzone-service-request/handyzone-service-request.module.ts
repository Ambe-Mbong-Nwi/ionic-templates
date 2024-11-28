import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HandyzoneServiceRequestPageRoutingModule } from './handyzone-service-request-routing.module';

import { HandyzoneServiceRequestPage } from './handyzone-service-request.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    HandyzoneServiceRequestPageRoutingModule
  ],
  declarations: [HandyzoneServiceRequestPage]
})
export class HandyzoneServiceRequestPageModule {}
