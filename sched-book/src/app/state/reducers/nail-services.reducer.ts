import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/nail-services.actions';

export interface NailServiceEntity {
  id: string;
  name: string;
  price: number;
  isDeleted: boolean;
}

export interface NailServiceState extends EntityState<NailServiceEntity> { }

export const adapter = createEntityAdapter<NailServiceEntity>();

const initialState = adapter.getInitialState();
// const initialState: NailServiceState = {
//   ids: ['1', '2', '3'],
//   entities: {
//     1: { id: '1', name: 'Manicure', price: 20.00, isDeleted: false },
//     2: { id: '2', name: 'Pedicure', price: 27.00, isDeleted: false },
//     3: { id: '3', name: 'Acrylics', price: 35.00, isDeleted: false },
//   }
// };

const reducerFunction = createReducer(
  initialState,
  on(actions.loadNailServicesSucceess, (oldState, action) => adapter.setAll(action.payload, oldState)),
  // on(actions.createNailServiceSuccess, (oldState, action) => adapter.addOne(action.payload, oldState)),
  // on(actions.updateNailServiceSucceess, (oldState, action) => adapter.updateOne({
  //   id: action.payload.id,
  //   changes: {
  //     name: action.payload.name,
  //     price: action.payload.price
  //   }
  // }, oldState)),
  // on(actions.markNailServiceDeletedSuccess, (oldState, action) => adapter.removeOne(action.id, oldState))
);

export function reducer(state: NailServiceState = initialState, action: Action): NailServiceState {
  return reducerFunction(state, action);
}
