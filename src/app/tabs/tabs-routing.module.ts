import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'recognitions',
        loadChildren: () => import('../recognitions/recognitions.module').then( m => m.RecognitionsPageModule)
      },
      {
        path: 'record',
        loadChildren: () => import('../record/record.module').then( m => m.RecordPageModule)
      },
      {
        path: 'rute',
        loadChildren: () => import('../rute/rute.module').then( m => m.RutePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/profile',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
