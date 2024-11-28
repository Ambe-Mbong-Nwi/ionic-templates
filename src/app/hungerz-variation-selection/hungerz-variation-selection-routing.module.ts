import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HungerzVariationSelectionPage } from './hungerz-variation-selection.page';

const routes: Routes = [
  {
    path: '',
    component: HungerzVariationSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HungerzVariationSelectionPageRoutingModule {}
