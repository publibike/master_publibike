import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampaingsPageRoutingModule } from './campaings-routing.module';

import { CampaingsPage } from './campaings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampaingsPageRoutingModule
  ],
  declarations: [CampaingsPage]
})
export class CampaingsPageModule {}
