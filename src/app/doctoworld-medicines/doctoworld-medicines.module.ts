import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctoworldMedicinesPageRoutingModule } from './doctoworld-medicines-routing.module';

import { TranslateModule } from '@ngx-translate/core';


import { DoctoworldMedicinesPage } from './doctoworld-medicines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DoctoworldMedicinesPageRoutingModule
  ],
  declarations: [DoctoworldMedicinesPage]
})
export class DoctoworldMedicinesPageModule {}
