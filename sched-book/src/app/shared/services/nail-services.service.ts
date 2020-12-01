import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { NailServiceEntity } from 'src/app/state/reducers/nail-services.reducer';

@Injectable({
  providedIn: 'root'
})
export class NailServicesService {
  readonly nailServicesCollection = this.firestore.collection('nailServices');

  constructor(private firestore: AngularFirestore) { }

  getNailServices(): Observable<any> {
    return this.nailServicesCollection.snapshotChanges();
  }

  addNailService(newNailService: NailServiceEntity): Observable<DocumentReference> {
    return from(this.nailServicesCollection.add(newNailService));
  }

  markNailServiceDeleted(id: string): Observable<void> {
    return from(this.nailServicesCollection.doc(id).update({ isDeleted: true }));
  }

  updateNailService(updatedNailService: { id: string, name: string, price: number }): Observable<void> {
    return from(this.nailServicesCollection.doc(updatedNailService.id).update({
      name: updatedNailService.name,
      price: updatedNailService.price
    }));
  }
}
