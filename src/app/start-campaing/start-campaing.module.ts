import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartCampaingPageRoutingModule } from './start-campaing-routing.module';

import { StartCampaingPage } from './start-campaing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartCampaingPageRoutingModule
  ],
  declarations: [StartCampaingPage]
})
export class StartCampaingPageModule {}
