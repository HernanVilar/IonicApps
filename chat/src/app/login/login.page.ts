import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToastController} from "@ionic/angular";
import { AuthService } from '../servicios/auth.service';
import { Mensaje } from 'src/app/clases/mensaje';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  spn:boolean = true;
  bool:boolean = true;
  email:string = "Seleccione una opción";
  password:string;
  p:string;
  guardar:string;
  unUsuario: Mensaje = new Mensaje();
  opcionSeleccionado:string = "hola";
  constructor(public authService:AuthService,public t:ToastController,public router:Router,private spinner: NgxSpinnerService) { 
    this.authService.dato = localStorage.getItem("usuario");
    this.authService.dato = JSON.parse(this.authService.dato);
  }

  ngOnInit() {
  }
  OnSubmitLogin()
  {
   var expresiones = /\w+@\w+\.+[a-z]/;


   if(!expresiones.test(this.email))
   {
    this.presentToast("Error.Formato de Correo no valido");
   }
   else
   {
     if(this.password != '')
     {
      this.spn =  true;
      this.spinner.show();
      this.authService.login(this.email,this.password).then((res:any)=>{

        this.unUsuario.correo = res.user.email;
        this.unUsuario.pw = res.user.uid;
        this.guardar =  JSON.stringify(this.unUsuario);
        localStorage.setItem("usuario",this.guardar);
        this.spn = false;
        this.router.navigate(['home']);
      }).catch(res => {this.presentToast("Error, datos incorrectos")})
     }
     else
     {
      this.presentToast("Error.Ingrese una contraseña");
     }
   }
  }
  async presentToast(data:string)
  {
    const toast = await this.t.create({
      message: data,
      duration: 2000
    })
    toast.present();
  }
  setiar(email:string,password:string)
  {
    console.log(email);
    this.email = email;
    this.password = password;
  }
  cambio()
  {
    this.password = "123456";
    this.bool = false;
  }
}
