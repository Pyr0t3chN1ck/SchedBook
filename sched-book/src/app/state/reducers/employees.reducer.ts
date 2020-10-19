import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/employees.actions';

export interface EmployeeEntity {
  id: string;
  firstName: string;
  lastName: string;
  isDeleted: boolean;
}

export interface EmployeeState extends EntityState<EmployeeEntity> { }

export const adapter = createEntityAdapter<EmployeeEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState,
  on(actions.loadEmployeesSucceess, (oldState, action) => adapter.setAll(action.payload, oldState))
);

export function reducer(state: EmployeeState = initialState, action: Action): EmployeeState {
  return reducerFunction(state, action);
}

