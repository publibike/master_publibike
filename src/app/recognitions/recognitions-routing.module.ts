import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecognitionsPage } from './recognitions.page';

const routes: Routes = [
  {
    path: '',
    component: RecognitionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecognitionsPageRoutingModule {}
