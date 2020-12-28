import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { AppointmentEntity } from 'src/app/state/reducers/appointments.reducer';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  readonly appointmentColleciton = this.firestore.collection('appointments');

  constructor(private firestore: AngularFirestore) { }

  getAppointments(): Observable<any> {
    return this.appointmentColleciton.snapshotChanges();
  }

  addAppointment(newAppointment: AppointmentEntity): Observable<DocumentReference> {
    return from(this.appointmentColleciton.add(newAppointment));
  }

  deleteAppointment(id: string): Observable<void> {
    return from(this.appointmentColleciton.doc(id).delete());
  }
}
