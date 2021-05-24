import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
data:any;

  constructor(private AFauth: AngularFireAuth) { }
  login(email:string,password:string)
   {
     return new Promise((resolve,rejected)=>{
       this.AFauth.signInWithEmailAndPassword(email,password).then(user =>{
        this.data = user.user?.email;
         resolve(user)
       }).catch(err=>rejected(err));
     })
 }
}
