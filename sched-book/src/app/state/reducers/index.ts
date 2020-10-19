import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromEmployees from './employees.reducer';
import * as fromMessages from './messages.reducer';


export interface AppState {
  employees: fromEmployees.EmployeeState;
  messages: fromMessages.NotificationMessageState;
}

export const reducers: ActionReducerMap<AppState> = {
  employees: fromEmployees.reducer,
  messages: fromMessages.reducer
};

const selectEmployeesBranch = createFeatureSelector<fromEmployees.EmployeeState>('employees');
const selectMessagesBranch = (state: AppState) => state.messages;

const { selectAll: selectAllEmployeeEntities } = fromEmployees.adapter.getSelectors(selectEmployeesBranch);

export const selectAllCurrentEmployees = createSelector(
  selectAllEmployeeEntities,
  employees => employees.filter(emp => emp.isDeleted === false)
);

export const selectMessageType = createSelector(
  selectMessagesBranch,
  msg => msg.type
);

export const selectMessageContent = createSelector(
  selectMessagesBranch,
  msg => msg.message
);
