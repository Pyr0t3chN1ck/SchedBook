import { createAction, props } from '@ngrx/store';
import { AppointmentCreatePayload } from 'src/app/shared/models';
import { AppointmentEntity } from '../reducers/appointments.reducer';

// Loading appointment actions
export const loadAppointments = createAction(
  '[appointments] loading appointment data'
);

export const loadAppointmentsSucceess = createAction(
  '[appointments] loaded appointment data successfully',
  props<{ payload: AppointmentEntity[] }>()
);

export const loadApointmentsFail = createAction(
  '[appointments] loading appointment data failed',
  props<{ message: string }>()
);

// Adding appointment actions
export const createAppointment = createAction(
  '[appointments] adding appointment',
  (createPayload: AppointmentCreatePayload) => ({
    payload: {
      ...createPayload
    } as AppointmentEntity
  })
);

export const createAppointmentSuccess = createAction(
  '[appointments] appointment added successfully',
  props<{ payload: AppointmentEntity }>()
);

export const createAppointmentFail = createAction(
  '[appointments] appointment added failed',
  props<{ message: string, payload: AppointmentEntity }>()
);

// Update appointment actions
export const updateAppointment = createAction(
  '[appointments] updating appointment data',
  props<{
    payload: {
      id: string,
      apptDate: Date;
      startTime: Date;
      endTime: Date;
      clientId: string;
      clientName: string;
      clientPhoneNumber: string;
      nailServices: string[];
      assignedEmployee: string;
      notes: string;
      oldValues: {
        apptDate: Date;
        startTime: Date;
        endTime: Date;
        clientId: string;
        clientName: string;
        clientPhoneNumber: string;
        nailServices: string[];
        assignedEmployee: string;
        notes: string;
      }
    }
  }>()
);

export const updateAppointmentSucceess = createAction(
  '[appointments] updated appointment data successfully',
  props<{
    payload: {
      id: string,
      apptDate: Date;
      startTime: Date;
      endTime: Date;
      clientId: string;
      clientName: string;
      clientPhoneNumber: string;
      nailServices: string[];
      assignedEmployee: string;
      notes: string;
      oldValues: {
        apptDate: Date;
        startTime: Date;
        endTime: Date;
        clientId: string;
        clientName: string;
        clientPhoneNumber: string;
        nailServices: string[];
        assignedEmployee: string;
        notes: string;
      }
    }
  }>()
);

export const updateAppointmentFail = createAction(
  '[appointments] updating appointment data failed',
  props<{
    message: string,
    payload: {
      id: string,
      apptDate: Date;
      startTime: Date;
      endTime: Date;
      clientId: string;
      clientName: string;
      clientPhoneNumber: string;
      nailServices: string[];
      assignedEmployee: string;
      notes: string;
      oldValues: {
        apptDate: Date;
        startTime: Date;
        endTime: Date;
        clientId: string;
        clientName: string;
        clientPhoneNumber: string;
        nailServices: string[];
        assignedEmployee: string;
        notes: string;
      }
    }
  }>()
);

// Delete employee actions
export const deleteAppointment = createAction(
  '[apppontments] deleting appointment',
  props<{ id: string }>()
);

export const deleteAppointmentSuccess = createAction(
  '[appointments] deleting appointment success',
  props<{ id: string }>()
);

export const deleteAppointmentFail = createAction(
  '[appointments] deleting appointment failed',
  props<{ message: string }>()
);
