import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctoworldDoctorsPageRoutingModule } from './doctoworld-doctors-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { DoctoworldDoctorsPage } from './doctoworld-doctors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DoctoworldDoctorsPageRoutingModule
  ],
  declarations: [DoctoworldDoctorsPage]
})
export class DoctoworldDoctorsPageModule { }
