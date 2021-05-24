import { Component, OnInit } from '@angular/core';
import { Mensajechat } from "../clases/mensajechat";
import { MensajesrealtimeService } from '../servicios/mensajesrealtime.service';

@Component({
  selector: 'app-chatfirestore',
  templateUrl: './chatfirestore.component.html',
  styleUrls: ['./chatfirestore.component.scss'],
})
export class ChatfirestoreComponent implements OnInit {

  nuevoMensaje: Mensajechat;
  ver:any; 
  
  constructor(private servicioRealTime:MensajesrealtimeService) {
    this.nuevoMensaje = new Mensajechat();
   }

  ngOnInit(): void {
  }

  EnviarMensaje() {
    this.nuevoMensaje.fecha = new Date().toLocaleString();
    this.ver = localStorage.getItem("usuario");
    this.ver = JSON.parse(this.ver);
    this.nuevoMensaje.email =  this.ver.correo;
    console.log(this.nuevoMensaje);
    console.log("que cagada.");

    this.servicioRealTime.create(this.nuevoMensaje).then(()=>{
      console.log("se envio el mensaje RealTime");
    });

  }

}
