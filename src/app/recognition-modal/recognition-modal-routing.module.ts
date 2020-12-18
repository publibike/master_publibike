import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecognitionModalPage } from './recognition-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RecognitionModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecognitionModalPageRoutingModule {}
