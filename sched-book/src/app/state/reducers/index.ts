import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromEmployees from './employees.reducer';
import * as fromClients from './clients.reducer';
import * as fromNailServices from './nail-services.reducer';
import * as fromAppointments from './appointments.reducer';
import * as fromMessages from './messages.reducer';


export interface AppState {
  employees: fromEmployees.EmployeeState;
  clients: fromClients.ClientState;
  nailServices: fromNailServices.NailServiceState;
  appointments: fromAppointments.AppointmentState;
  messages: fromMessages.NotificationMessageState;
}

export const reducers: ActionReducerMap<AppState> = {
  employees: fromEmployees.reducer,
  clients: fromClients.reducer,
  nailServices: fromNailServices.reducer,
  appointments: fromAppointments.reducer,
  messages: fromMessages.reducer
};

const selectEmployeesBranch = createFeatureSelector<fromEmployees.EmployeeState>('employees');
const selectClientsBranch = createFeatureSelector<fromClients.ClientState>('clients');
const selectNailServicesBranch = createFeatureSelector<fromNailServices.NailServiceState>('nailServices');
const selectAppointmentsBranch = createFeatureSelector<fromAppointments.AppointmentState>('appointments');
const selectMessagesBranch = (state: AppState) => state.messages;

const { selectAll: selectAllEmployeeEntities } = fromEmployees.adapter.getSelectors(selectEmployeesBranch);
const { selectAll: selectAllClientEntities } = fromClients.adapter.getSelectors(selectClientsBranch);
const { selectAll: selectAllNailServiceEntities } = fromNailServices.adapter.getSelectors(selectNailServicesBranch);
const { selectAll: selectAllAppointmentsEntities } = fromAppointments.adapter.getSelectors(selectAppointmentsBranch);

export const selectAllCurrentEmployees = createSelector(
  selectAllEmployeeEntities,
  employees => employees.filter(emp => emp.isDeleted === false)
);

export const selectAllCurrentClients = createSelector(
  selectAllClientEntities,
  clients => clients.filter(client => client.isDeleted === false)
);

export const selectAllCurrentNailServices = createSelector(
  selectAllNailServiceEntities,
  services => services.filter(ns => ns.isDeleted === false)
);

export const selectAllAppointments = createSelector(
  selectAllAppointmentsEntities,
  appts => appts.filter(appt => appt.apptDate >= new Date().)
);

export const selectMessageType = createSelector(
  selectMessagesBranch,
  msg => msg.type
);

export const selectMessageContent = createSelector(
  selectMessagesBranch,
  msg => msg.message
);
