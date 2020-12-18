import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecognitionsPageRoutingModule } from './recognitions-routing.module';

import { RecognitionsPage } from './recognitions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecognitionsPageRoutingModule
  ],
  declarations: [RecognitionsPage]
})
export class RecognitionsPageModule {}
