import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Employee, NailService } from 'src/app/shared/models';
import * as actions from '../actions/appointments.actions';

export interface AppointmentEntity {
  id: string;
  apptDate: Date;
  startTime: Date;
  endTime: Date;
  clientId: string;
  clientName: string;
  clientPhoneNumber: string;
  nailServices: NailService[];
  assignedEmployees: Employee[];
  notes: string;
}

export interface AppointmentState extends EntityState<AppointmentEntity> { }

export const adapter = createEntityAdapter<AppointmentEntity>();

const initialState = adapter.getInitialState();
// const initialState: AppointmentState = {
//   ids: ['1'],
//   entities: {
//     1: { id: '1'}
//   }
// };

const reducerFunction = createReducer(
  initialState,
  on(actions.loadAppointmentsSucceess, (oldState, action) => adapter.setAll(action.payload, oldState)),
  on(actions.createAppointmentSuccess, (oldState, action) => adapter.addOne(action.payload, oldState)),
  on(actions.updateAppointmentSucceess, (oldState, action) => adapter.updateOne({
    id: action.payload.id,
    changes: {
      apptDate: action.payload.apptDate,
      startTime: action.payload.startTime,
      endTime: action.payload.endTime,
      clientId: action.payload.clientId,
      clientName: action.payload.clientName,
      clientPhoneNumber: action.payload.clientPhoneNumber,
      nailServices: action.payload.nailServices,
      assignedEmployees: action.payload.assignedEmployees,
      notes: action.payload.notes,
    }
  }, oldState)),
  on(actions.deleteAppointmentSuccess, (oldState, action) => adapter.removeOne(action.id, oldState))
);

export function reducer(state: AppointmentState = initialState, action: Action): AppointmentState {
  return reducerFunction(state, action);
}
