import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { firebaseConfig } from "../environments/environment"
import { AngularFireModule } from "@angular/fire";
import {  AngularFireAuthModule } from "@angular/fire/auth";
import { FormsModule } from '@angular/forms';
import {MensajesrealtimeService} from '../app/servicios/mensajesrealtime.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [FormsModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(firebaseConfig),AngularFireAuthModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},MensajesrealtimeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
