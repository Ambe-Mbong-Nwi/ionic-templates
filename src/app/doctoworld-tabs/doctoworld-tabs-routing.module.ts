import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DoctoworldTabsPage } from './doctoworld-tabs.page';

const routes: Routes = [
  {
    path: 'doctoworld-tabs',
    component: DoctoworldTabsPage,
    children: [
      {
        path: 'DoctoworldHome',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../doctoworld-home/doctoworld-home.module').then(m => m.DoctoworldHomePageModule)
          }
        ]
      },
      {
        path: 'DoctoworldDoctors',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../doctoworld-doctors/doctoworld-doctors.module').then(m => m.DoctoworldDoctorsPageModule)
          }
        ]
      },
      {
        path: 'DoctoworldHospitals',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../doctoworld-hospital/doctoworld-hospital.module').then(m => m.DoctoworldHospitalPageModule)
          }
        ]
      },
      {
        path: 'DoctoworldMyAppointments',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../doctoworld-my-appointments/doctoworld-my-appointments.module').then(m => m.DoctoworldMyAppointmentsPageModule)
          }
        ]
      },
      {
        path: 'DoctoworldAccount',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../doctoworld-account/doctoworld-account.module').then(m => m.DoctoworldAccountPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/doctoworld-tabs/DoctoworldHome',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctoworldTabsPageRoutingModule { }
