import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscribeCampaingPage } from './subscribe-campaing.page';

const routes: Routes = [
  {
    path: '',
    component: SubscribeCampaingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscribeCampaingPageRoutingModule {}
