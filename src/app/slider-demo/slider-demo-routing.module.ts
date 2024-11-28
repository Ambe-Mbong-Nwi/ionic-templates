import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SliderDemoPage } from './slider-demo.page';

const routes: Routes = [
  {
    path: '',
    component: SliderDemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SliderDemoPageRoutingModule {}
