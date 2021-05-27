import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Credito } from '../clases/credito';

@Injectable({
  providedIn: 'root'
})

export class CreditosService {

    private dbPath = '/creditos';
    creditosRef : AngularFirestoreCollection<Credito>
    
    constructor(private db: AngularFirestore) { 
      this.creditosRef = db.collection(this.dbPath);
    }

    
    getAll(): AngularFirestoreCollection<Credito>{
      return this.creditosRef;
    }
    
  create(credito:Credito){
    return this.creditosRef.add({...credito});
  }

  update(id: string, credito: Credito): Promise<void> {
    return this.creditosRef.doc(id).update({
    credito:credito.credito,
    codigo:credito.codigo
    });
  }
  delete(id: string): Promise<void> {
    return this.creditosRef.doc(id).delete();
  }

}