import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { EmployeeEntity } from 'src/app/state/reducers/employees.reducer';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  readonly employeesCollection = this.firestore.collection('employees');

  constructor(private firestore: AngularFirestore) { }

  getEmployees(): Observable<any> {
    return this.employeesCollection.snapshotChanges();
  }

  addEmployee(newEmployee: EmployeeEntity): Observable<DocumentReference> {
    return from(this.employeesCollection.add(newEmployee));
  }

  markEmployeeDeleted(id: string): Observable<void> {
    return from(this.employeesCollection.doc(id).update({ isDeleted: true }));
  }

  updateEmployee(updatedEmployee: { id: string, firstName: string, lastName: string }): Observable<void> {
    return from(this.employeesCollection.doc(updatedEmployee.id).update({
      firstName: updatedEmployee.firstName,
      lastName: updatedEmployee.lastName
    }));
  }
}
