import { Component, OnInit } from '@angular/core';
import { Mensajechat } from "../clases/mensajechat";
import { MensajesrealtimeService } from '../servicios/mensajesrealtime.service';

import { map} from 'rxjs/operators';
import { AuthService } from '../servicios/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-realtime',
  templateUrl: './lista-realtime.page.html',
  styleUrls: ['./lista-realtime.page.scss'],
})
export class ListaRealtimePage implements OnInit {

  ver:any;
  listadoMensajes?: any[];
  mensajeActual?: Mensajechat;
  currentIndex = -1;
  title = '';
  dato:any;

  constructor(private servicioRealTime:MensajesrealtimeService,private auth:AuthService) { 
    this.dato = localStorage.getItem("usuario");
    this.dato = JSON.parse(this.dato);
    this.cargarMensajes();
  }

  ngOnInit(): void {
    
    this.cargarMensajes();
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

}
