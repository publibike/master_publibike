import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroGuard } from '../guards/intro.guard';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("../home/home.module").then(m => m.HomePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
        // loadChildren: "../profile/profile.module#ProfilePageModule"
      },
      {
        path: 'campaings',
        loadChildren: () => import('../campaings/campaings.module').then(m => m.CampaingsPageModule)
        // loadChildren: "../campaings/campaings.module#CampaingsPageModule"

      },
      {
        path: 'rutes',
        loadChildren: () => import('../rutes/rutes.module').then(m => m.RutesPageModule)
      },
      {
        path: 'rute',
        loadChildren: () => import('../rute/rute.module').then(m => m.RutePageModule)
        // loadChildren: "../rute/rute.module#RutePageModule"

      },
      {
        path: 'start-campaing',
        loadChildren: () => import('../start-campaing/start-campaing.module').then(m => m.StartCampaingPageModule)
      },
      {
        path: 'subscribe-campaing',
        loadChildren: () => import('../subscribe-campaing/subscribe-campaing.module').then(m => m.SubscribeCampaingPageModule)
      },
      {
        path: 'intro',
        loadChildren: () => import('../intro/intro.module').then( m => m.IntroPageModule)
      },
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
