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

  addAppointment(newAppointment: AppointmentEntity): Observable<DocumentReference> {
    return from(this.appointmentColleciton.add(newAppointment));
  }
}
