import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutePageRoutingModule } from './rute-routing.module';

import { RutePage } from './rute.page';
// import { DeviceMotion} from '@ionic-native/device-motion/ngx';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RutePageRoutingModule,
    RouterModule.forChild([
      {
        path:'',
        component: RutePage
      }
    ]),
    // DeviceMotion
  ],
  declarations: [RutePage]
})
export class RutePageModule {}
