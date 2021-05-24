import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PrimersalaPageRoutingModule } from './primersala-routing.module';

import { PrimersalaPage } from './primersala.page';
import { ChatfirestoreComponent } from '../chatfirestore/chatfirestore.component';
import { ListaRealtimePage } from '../lista-realtime/lista-realtime.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  
    PrimersalaPageRoutingModule
  ],
  declarations: [PrimersalaPage,ChatfirestoreComponent,ListaRealtimePage]
})
export class PrimersalaPageModule {}
