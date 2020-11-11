import { createAction, props } from '@ngrx/store';
import { NotificationMessageState } from '../reducers/messages.reducer';

// Loading messages actions
export const loadMessagess = createAction(
  '[messages] load messagess'
);

export const loadMessagessSuccess = createAction(
  '[messages] load messagess success',
  props<{ payload: NotificationMessageState }>()
);

export const loadMessagessFailure = createAction(
  '[messages] load messagess failure',
  props<{ message: string }>()
);

// Adding message actions
export const addMessage = createAction(
  '[messages] adding message',
  props<{ payload: NotificationMessageState }>()
);

// export const addMessageSuccess = createAction(
//   '[messages] message added successfully',
//   props<{ payload: NotificationMessageEntity }>()
// );

// export const addMessageFail = createAction(
//   '[messages] message added failed',
//   props<{ message: string }>()
// );

// Reset message action
export const resetMessage = createAction(
  '[messages] resetting message state'
);
