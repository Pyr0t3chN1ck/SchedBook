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

}
