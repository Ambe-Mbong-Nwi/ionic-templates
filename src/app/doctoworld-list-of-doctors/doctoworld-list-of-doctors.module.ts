import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
 
import { DoctoworldListOfDoctorsPageRoutingModule } from './doctoworld-list-of-doctors-routing.module';

import { DoctoworldListOfDoctorsPage } from './doctoworld-list-of-doctors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DoctoworldListOfDoctorsPageRoutingModule
  ],
  declarations: [DoctoworldListOfDoctorsPage]
})
export class DoctoworldListOfDoctorsPageModule {}
