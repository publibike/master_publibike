import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartCampaingPage } from './start-campaing.page';

const routes: Routes = [
  {
    path: '',
    component: StartCampaingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartCampaingPageRoutingModule {}
