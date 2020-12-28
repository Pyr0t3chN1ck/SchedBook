import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { AppointmentEntity } from 'src/app/state/reducers/appointments.reducer';
import { Employee, NailService } from '../models';

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

  updateAppointment(updatedAppointment: {
    id: string,
    apptDate: Date,
    startTime: Date,
    endTime: Date,
    clientId: string,
    clientName: string,
    clientPhoneNumber: string,
    nailServices: NailService[],
    assignedEmployees: Employee[],
    notes: string,
  }): Observable<void> {
    return from(this.appointmentColleciton.doc(updatedAppointment.id).update({
      apptDate: updatedAppointment.apptDate,
      startTime: updatedAppointment.startTime,
      endTime: updatedAppointment.endTime,
      clientId: updatedAppointment.clientId,
      clientName: updatedAppointment.clientName,
      clientPhoneNumber: updatedAppointment.clientPhoneNumber,
      nailServices: updatedAppointment.nailServices,
      assignedEmployees: updatedAppointment.assignedEmployees,
      notes: updatedAppointment.notes
    }));
  }
}
