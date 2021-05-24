import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegundasalaPage } from './segundasala.page';

const routes: Routes = [
  {
    path: '',
    component: SegundasalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegundasalaPageRoutingModule {}
