import { Component, OnInit } from '@angular/core';
import { Mensajechat } from "../clases/mensajechat";
import { MensajesfirestoreService } from '../servicios/mensajesfirestore.service';
import { MensajesrealtimeService } from '../servicios/mensajesrealtime.service';
import { map} from 'rxjs/operators';
import { AuthService } from '../servicios/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-primersala',
  templateUrl: './primersala.page.html',
  styleUrls: ['./primersala.page.scss'],
})
export class PrimersalaPage implements OnInit {

  nuevoMensaje: Mensajechat;
  ver:any; 
  listadoMensajes?: any[];
  mensajeActual?: Mensajechat;
  currentIndex = -1;
  title = '';
  dato:any;
  
  constructor(private servicioFirestore:MensajesfirestoreService,private servicioRealTime:MensajesrealtimeService) {
    this.servicioRealTime.dbPath = "/mensajesPrimerSala";
    this.nuevoMensaje = new Mensajechat();
    this.dato = localStorage.getItem("usuario");
    this.dato = JSON.parse(this.dato);
    console.log(this.dato.correo);
    this.cargarMensajes();
   }

  ngOnInit(): void {
  }

  EnviarMensaje() {
    this.nuevoMensaje.fecha = new Date().toLocaleString();
    this.ver = localStorage.getItem("usuario");
    this.ver = JSON.parse(this.ver);
    this.nuevoMensaje.email =  this.ver.correo;
    this.servicioFirestore.create(this.nuevoMensaje).then(()=>{
        this.nuevoMensaje.email = "";
    });

    this.servicioRealTime.create(this.nuevoMensaje).then(()=>{
      console.log("se envio el mensaje RealTime");
      this.nuevoMensaje.mensaje = "";
    });

  }
  cargarMensajes(): void {
    this.servicioRealTime.getAll().snapshotChanges().pipe(
      map((changes:any) =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.listadoMensajes = data;
      data.forEach(element => {
        if(element.email == this.dato.correo)
        {
          element.email = "";
        }
        console.log(element.email);
      });
      
    });

  }
  loadData(data:any)
  {
    console.log("hola");
  }


}
