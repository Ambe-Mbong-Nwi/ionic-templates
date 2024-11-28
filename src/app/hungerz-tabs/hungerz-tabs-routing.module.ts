import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HungerzTabsPage } from './hungerz-tabs.page';

const routes: Routes = [
  {
    path: 'hungerz-tabs',
    component: HungerzTabsPage,
    children: [
      {
        path: 'hungerzHome',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../hungerz-home/hungerz-home.module').then(m => m.HungerzHomePageModule)
          }
        ]
      },
      {
        path: 'hungerzMyOrders',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../hungerz-my-orders/hungerz-my-orders.module').then(m => m.HungerzMyOrdersPageModule)
          }
        ]
      },
      {
        path: 'hungerzMyAccount',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../hungerz-my-account/hungerz-my-account.module').then(m => m.HungerzMyAccountPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/hungerz-tabs/hungerzHome',
        pathMatch: 'full'
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HungerzTabsPageRoutingModule { }
