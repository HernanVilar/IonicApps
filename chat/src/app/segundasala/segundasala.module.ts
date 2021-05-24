import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegundasalaPageRoutingModule } from './segundasala-routing.module';

import { SegundasalaPage } from './segundasala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegundasalaPageRoutingModule
  ],
  declarations: [SegundasalaPage]
})
export class SegundasalaPageModule {}
