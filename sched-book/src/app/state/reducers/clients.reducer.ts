
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

// const initialState = adapter.getInitialState();
const initialState: ClientState = {
  ids: ['1', '2', '3', '4', '5', '6', '7'],
  entities: {
    1: {
      id: '1', firstName: 'John', lastName: 'Smith', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
      email: 'testmail@email.com', dateOfBirth: new Date(), brandPreference: '', colorPreference: '', notes: '', isDeleted: false
    },
    2: {
      id: '2', firstName: 'Jane', lastName: 'Doe', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
      email: 'testmail@email.com', dateOfBirth: new Date(), brandPreference: '', colorPreference: '', notes: '', isDeleted: false
    },
    3: {
      id: '3', firstName: 'Orlando', lastName: 'Bloom', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
      email: 'testmail@email.com', dateOfBirth: new Date(), brandPreference: '', colorPreference: '', notes: '', isDeleted: false
    },
    4: {
      id: '4', firstName: 'Chris', lastName: 'Evans', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
      email: 'testmail@email.com', dateOfBirth: new Date(), brandPreference: '', colorPreference: '', notes: '', isDeleted: false
    },
    5: {
      id: '5', firstName: 'Clark', lastName: 'Kent', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
      email: 'testmail@email.com', dateOfBirth: new Date(), brandPreference: '', colorPreference: '', notes: '', isDeleted: false
    },
    6: {
      id: '6', firstName: 'Peter', lastName: 'Parker', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
      email: 'testmail@email.com', dateOfBirth: new Date(), brandPreference: '', colorPreference: '', notes: '', isDeleted: false
    },
    7: {
      id: '7', firstName: 'Bruce', lastName: 'Wayne', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
      email: 'testmail@email.com', dateOfBirth: new Date(), brandPreference: '', colorPreference: '', notes: '', isDeleted: false
    }
  }
};
const reducerFunction = createReducer(
  initialState,
  on(actions.loadClientsSuccess, (oldState, action) => adapter.setAll(action.payload, oldState)),
  on(actions.createClientSuccess, (oldState, action) => adapter.addOne(action.payload, oldState)),
  on(actions.updateClientSuccess, (oldState, action) => adapter.updateOne({
    id: action.payload.id,
    changes: {
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
      address: action.payload.address,
      phoneNumber: action.payload.phoneNumber,
      email: action.payload.email,
      dateOfBirth: action.payload.dateOfBirth,
      brandPreference: action.payload.brandPreference,
      colorPreference: action.payload.colorPreference,
      notes: action.payload.notes
    }
  }, oldState)),
  on(actions.markClientDeletedSuccess, (oldState, action) => adapter.removeOne(action.id, oldState))
);

export function reducer(state: ClientState = initialState, action: Action): ClientState {
  return reducerFunction(state, action);
}
