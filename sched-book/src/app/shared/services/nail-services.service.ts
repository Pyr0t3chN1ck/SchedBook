import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NailServicesService {

  constructor(private firestore: AngularFirestore) { }

  getNailServices(): Observable<any> {
    return this.firestore.collection('nailServices').snapshotChanges();
  }
}
