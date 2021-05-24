import { Component, OnInit } from '@angular/core';
import { Mensajechat } from "../clases/mensajechat";
import { MensajesfirestoreService } from '../servicios/mensajesfirestore.service';
import { MensajesrealtimeService } from '../servicios/mensajesrealtime.service';

@Component({
  selector: 'app-chatfirestore',
  templateUrl: './chatfirestore.component.html',
  styleUrls: ['./chatfirestore.component.scss'],
})
export class ChatfirestoreComponent implements OnInit {

  nuevoMensaje: Mensajechat;
  ver:any; 
  
  constructor(private servicioFirestore:MensajesfirestoreService,private servicioRealTime:MensajesrealtimeService) {
    this.nuevoMensaje = new Mensajechat();
   }

  ngOnInit(): void {
  }

  EnviarMensaje() {
    this.nuevoMensaje.fecha = new Date().toLocaleString();
    this.ver = localStorage.getItem("usuario");
    this.ver = JSON.parse(this.ver);
    this.nuevoMensaje.email =  this.ver.correo;
    this.servicioFirestore.create(this.nuevoMensaje).then(()=>{
      console.log("se envio el mensaje firestore");
    });

    this.servicioRealTime.create(this.nuevoMensaje).then(()=>{
      console.log("se envio el mensaje RealTime");
    });

  }

}
