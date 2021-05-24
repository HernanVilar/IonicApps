import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimersalaPage } from './primersala.page';

const routes: Routes = [
  {
    path: '',
    component: PrimersalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimersalaPageRoutingModule {}
