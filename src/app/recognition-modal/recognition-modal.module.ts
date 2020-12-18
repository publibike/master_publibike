import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecognitionModalPageRoutingModule } from './recognition-modal-routing.module';

import { RecognitionModalPage } from './recognition-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecognitionModalPageRoutingModule
  ],
  declarations: [RecognitionModalPage]
})
export class RecognitionModalPageModule {}
