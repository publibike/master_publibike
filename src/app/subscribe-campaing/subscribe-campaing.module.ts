import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscribeCampaingPageRoutingModule } from './subscribe-campaing-routing.module';

import { SubscribeCampaingPage } from './subscribe-campaing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscribeCampaingPageRoutingModule
  ],
  declarations: [SubscribeCampaingPage]
})
export class SubscribeCampaingPageModule {}
