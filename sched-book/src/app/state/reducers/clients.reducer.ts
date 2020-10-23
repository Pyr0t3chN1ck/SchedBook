
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/clients.actions';

export interface ClientEntity {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: Date;
  brandPreference: string;
  colorPreference: string;
  notes: string;
  isDeleted: boolean;
}

export interface ClientState extends EntityState<ClientEntity> { }

export const adapter = createEntityAdapter<ClientEntity>();

const initialState = adapter.getInitialState();
// const initialState: ClientState = {
//   ids: ['1'],
//   entities: {
//     1: { id: '1', firstName: 'Tip', lastName: 'Letdara', isDeleted: false }
//   }
// };

const reducerFunction = createReducer(
  initialState
);

export function reducer(state: ClientState = initialState, action: Action): ClientState {
  return reducerFunction(state, action);
}
