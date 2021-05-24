import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Mensajechat } from '../clases/mensajechat';

@Injectable({
  providedIn: 'root'
})
export class MensajesrealtimeService {

  
  public dbPath = '/MensajesGeneral';

  MensajesRef!: AngularFireList<Mensajechat>;
  data:any;

  constructor(private db: AngularFireDatabase) {
    
   }
   getAll(): AngularFireList<Mensajechat> {

    console.log(this.dbPath);
    this.MensajesRef = this.db.list(this.dbPath);
    return this.MensajesRef;
  }

  create(unMensajes: Mensajechat): any {
    console.log(unMensajes);
    this.MensajesRef = this.db.list(this.dbPath);
    return this.MensajesRef.push(unMensajes);
  }

  update(key: string, value: any): Promise<void> {
    this.MensajesRef = this.db.list(this.dbPath);
    return this.MensajesRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    this.MensajesRef = this.db.list(this.dbPath);
    return this.MensajesRef.remove(key);
  }

  deleteAll(): Promise<void> {
    this.MensajesRef = this.db.list(this.dbPath);
    return this.MensajesRef.remove();
  }
}
