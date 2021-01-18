import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: MenuPage,
    children: [
      {
        path: "home",
        loadChildren: () => import("../home/home.module").then(m => m.HomePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'campaings',
        loadChildren: () => import('../campaings/campaings.module').then(m => m.CampaingsPageModule)
      },
      {
        path: 'rutes',
        loadChildren: () => import('../rutes/rutes.module').then(m => m.RutesPageModule)
      },
      {
        path: 'rute',
        loadChildren: () => import('../rute/rute.module').then(m => m.RutePageModule)
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
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MenuPageRoutingModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
