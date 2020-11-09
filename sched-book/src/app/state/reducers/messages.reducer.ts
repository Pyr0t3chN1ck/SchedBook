import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { NotificationType } from 'src/app/shared/models/notification-type.enum';
import * as actions from '../actions/messages.actions';

export interface NotificationMessageState {
  message: string;
  type: NotificationType | null;
}

const initialState: NotificationMessageState = {
  message: null,
  type: null
};

const reducerFunction = createReducer(
  initialState,
  on(actions.addMessage, (oldState, action) => ({ ...oldState, message: action.payload.message, type: action.payload.type })),
  on(actions.resetMessage, (oldState, action) => ({ ...oldState, message: null, type: null }))
);

export function reducer(state: NotificationMessageState = initialState, action: Action): NotificationMessageState {
  return reducerFunction(state, action);
}
