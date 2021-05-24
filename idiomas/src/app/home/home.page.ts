import { Component, OnInit } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import {Router} from "@angular/router";
import {ToastController} from "@ionic/angular"


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public authService:AuthService,public t:ToastController,public router:Router) { }

  ngOnInit() {
  }
  OnSubmitLogin()
  {
      
  }
}
