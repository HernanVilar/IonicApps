import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Mensajechat } from '../clases/mensajechat';

@Injectable({
  providedIn: 'root'
})
export class MensajesfirestoreService {

  private dbPath = '/mensajesFire';

  MensajesRef: AngularFirestoreCollection<Mensajechat>;

  constructor(private db: AngularFirestore) { 
    this.MensajesRef = db.collection(this.dbPath);
  }
  getAll(): AngularFirestoreCollection<Mensajechat> {
    
    this.MensajesRef = this.db.collection(this.dbPath);
    return this.MensajesRef;
  }

  create(mensajes: Mensajechat): any {
    this.MensajesRef = this.db.collection(this.dbPath);
    return this.MensajesRef.add({...mensajes});
  }
 
  update(id: string, data: any): Promise<void> {
    this.MensajesRef = this.db.collection(this.dbPath);
    return this.MensajesRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    this.MensajesRef = this.db.collection(this.dbPath);
    return this.MensajesRef.doc(id).delete();
  }
  
}
