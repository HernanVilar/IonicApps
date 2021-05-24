import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaRealtimePageRoutingModule } from './lista-realtime-routing.module';

import { ListaRealtimePage } from './lista-realtime.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaRealtimePageRoutingModule
  ],
  declarations: [ListaRealtimePage]
})
export class ListaRealtimePageModule {}
