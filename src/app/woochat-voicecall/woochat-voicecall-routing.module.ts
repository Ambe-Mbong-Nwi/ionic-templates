import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WoochatVoicecallPage } from './woochat-voicecall.page';

const routes: Routes = [
  {
    path: '',
    component: WoochatVoicecallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WoochatVoicecallPageRoutingModule {}
