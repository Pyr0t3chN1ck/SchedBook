import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AppointmentService } from 'src/app/shared/services/appointment.service';
import * as appointmentActions from '../actions/appointments.actions';
import { AppointmentEntity } from '../reducers/appointments.reducer';

@Injectable()
export class AppointmentsEffects {

  constructor(private actions$: Actions, private service: AppointmentService) { }

  loadAppointments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appointmentActions.loadAppointments),
      switchMap(() => this.service.getAppointments()
        .pipe(
          map(results => appointmentActions.loadAppointmentsSucceess({
            payload: results.map(appt => {
              return {
                id: appt.payload.doc.id,
                ...appt.payload.doc.data() as any
              } as AppointmentEntity;
            })
          })),
          catchError(results => of(appointmentActions.loadApointmentsFail({ message: 'There was an issue loading appointments' })))
        )
      )
    )
  );

  createAppointment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appointmentActions.createAppointment),
      map(action => action.payload),
      switchMap((appointment) => this.service.addAppointment(appointment)
        .pipe(
          map((response) => appointmentActions.createAppointmentSuccess({
            payload: {
              id: response.id,
              ...appointment
            } as AppointmentEntity
          })),
          catchError(err => of(appointmentActions.createAppointmentFail({
            message: 'There was an issue creating appointment',
            payload: appointment
          }))
          )
        )
      )
    )
  );

  deleteAppointment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appointmentActions.deleteAppointment),
      map(action => action.id),
      switchMap((id) => this.service.deleteAppointment(id)
        .pipe(
          map(() => appointmentActions.deleteAppointmentSuccess({ id })),
          catchError(err => of(appointmentActions.deleteAppointmentFail({ message: 'There was an issue deleting appointment.' })))
        )
      )
    )
  );

  updateAppointment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appointmentActions.updateAppointment),
      map(action => action.payload),
      switchMap(appt => this.service.updateAppointment({
        id: appt.id,
        apptDate: appt.apptDate,
        startTime: appt.startTime,
        endTime: appt.endTime,
        clientId: appt.clientId,
        clientName: appt.clientName,
        clientPhoneNumber: appt.clientPhoneNumber,
        nailServices: appt.nailServices,
        assignedEmployees: appt.assignedEmployees,
        notes: appt.notes
      })
        .pipe(
          map(() => appointmentActions.updateAppointmentSucceess({ payload: appt })),
          catchError(err => of(appointmentActions.updateAppointmentFail({
            message: 'There was an issue updating appointment.',
            payload: appt
          })))
        )
      )
    )
  );
}
