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

// const initialState = adapter.getInitialState();
const initialState: EmployeeState = {
  ids: ['1'],
  entities: {
    1: { id: '1', firstName: 'Tip', lastName: 'Letdara', isDeleted: false }
  }
};

const reducerFunction = createReducer(
  initialState,
  on(actions.loadEmployeesSucceess, (oldState, action) => adapter.setAll(action.payload, oldState)),
  on(actions.addEmployeeSuccess, (oldState, action) => adapter.addOne(action.payload, oldState)),
  on(actions.updateEmployeeSucceess, (oldState, action) => adapter.updateOne({
    id: action.payload.id,
    changes: {
      firstName: action.payload.oldValues.firstName,
      lastName: action.payload.oldValues.lastName
    }
  }, oldState)),
  on(actions.markEmployeeDeletedSuccess, (oldState, action) => adapter.removeOne(action.id, oldState))
);

export function reducer(state: EmployeeState = initialState, action: Action): EmployeeState {
  return reducerFunction(state, action);
}

