import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { ClientEntity } from 'src/app/state/reducers/clients.reducer';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  readonly clientCollection = this.firestore.collection('clients');

  constructor(private firestore: AngularFirestore) { }

  getClients(): Observable<any> {
    return this.clientCollection.snapshotChanges();
  }

  addClient(newClient: ClientEntity): Observable<DocumentReference> {
    return from(this.clientCollection.add(newClient));
  }

  markClientDeleted(id: string): Observable<void> {
    return from(this.clientCollection.doc(id).update({ isDeleted: true }));
  }

  updateClient(updatedClient: {
    id: string,
    firstName: string,
    lastName: string,
    address: string,
    phoneNumber: string,
    email: string,
    dateOfBirth: Date,
    brandPreference: string,
    colorPreference: string,
    notes: string,
  }): Observable<void> {
    return from(this.clientCollection.doc(updatedClient.id).update({
      firstName: updatedClient.firstName,
      lastName: updatedClient.lastName,
      address: updatedClient.address,
      phoneNumber: updatedClient.phoneNumber,
      email: updatedClient.email,
      dateOfBirth: updatedClient.dateOfBirth,
      brandPreference: updatedClient.brandPreference,
      colorPreference: updatedClient.colorPreference,
      notes: updatedClient.notes,
    }));
  }
}
