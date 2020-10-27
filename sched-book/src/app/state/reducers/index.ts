import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromEmployees from './employees.reducer';
import * as fromClients from './clients.reducer';
import * as fromMessages from './messages.reducer';


export interface AppState {
  employees: fromEmployees.EmployeeState;
  clients: fromClients.ClientState;
  messages: fromMessages.NotificationMessageState;
}

export const reducers: ActionReducerMap<AppState> = {
  employees: fromEmployees.reducer,
  clients: fromClients.reducer,
  messages: fromMessages.reducer
};

const selectEmployeesBranch = createFeatureSelector<fromEmployees.EmployeeState>('employees');
const selectClientsBranch = createFeatureSelector<fromClients.ClientState>('clients');
const selectMessagesBranch = (state: AppState) => state.messages;

const { selectAll: selectAllEmployeeEntities } = fromEmployees.adapter.getSelectors(selectEmployeesBranch);
const { selectAll: selectAllClientEntities } = fromClients.adapter.getSelectors(selectClientsBranch);

export const selectAllCurrentEmployees = createSelector(
  selectAllEmployeeEntities,
  employees => employees.filter(emp => emp.isDeleted === false)
);

export const selectAllCurrentClients = createSelector(
  selectAllClientEntities,
  clients => clients.filter(client => client.isDeleted === false)
);

export const selectMessageType = createSelector(
  selectMessagesBranch,
  msg => msg.type
);

export const selectMessageContent = createSelector(
  selectMessagesBranch,
  msg => msg.message
);
