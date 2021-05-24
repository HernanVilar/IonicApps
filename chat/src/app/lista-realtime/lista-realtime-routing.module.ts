import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaRealtimePage } from './lista-realtime.page';

const routes: Routes = [
  {
    path: '',
    component: ListaRealtimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaRealtimePageRoutingModule {}
