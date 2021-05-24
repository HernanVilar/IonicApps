import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {Router} from "@angular/router";
import {ToastController} from "@ionic/angular";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // guardador:string;
  // constructor() {}
  // ngOnInit() {
  // }
  guardador:string;
  email:string = '';
  password:string = '';
  spn:boolean = true;
  constructor(public authService:AuthService,public t:ToastController,public router:Router,public spinner: NgxSpinnerService) { }

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
       this.spn = true;
      this.spinner.show();
      this.authService.login(this.email,this.password).then(res =>{
        this.spn = false;
        this.spinner.hide();
          this.router.navigate(['home']);
       
      }).catch(res => {
        this.presentToast("Error, datos incorrectos");
        this.spn = false;
      
      })
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
    this.email = email;
    this.password = password;
  }

}
