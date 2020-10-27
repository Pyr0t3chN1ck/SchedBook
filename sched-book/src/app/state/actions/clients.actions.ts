import { createAction, props } from '@ngrx/store';
import { ClientCreatePayload } from 'src/app/shared/models/index';
import { ClientEntity } from '../reducers/clients.reducer';

// Loading client actions
export const loadClients = createAction(
  '[clients] loading client data'
);

export const loadClientsSuccess = createAction(
  '[clients] loaded client data successfully',
  props<{ payload: ClientEntity[] }>()
);

export const loadClientsFail = createAction(
  '[clients] loaded client data failed',
  props<{ message: string }>()
);

// Adding client actions
export const createClient = createAction(
  '[clients] adding client',
  (createPayload: ClientCreatePayload) => ({
    payload: {
      ...createPayload,
      isDeleted: false
    } as ClientEntity
  })
);

export const createClientSuccess = createAction(
  '[clients] client added successfully',
  props<{ payload: ClientEntity }>()
);

export const createClientFail = createAction(
  '[clients] client added failed',
  props<{ message: string, payload: ClientEntity }>()
);

// Update client actions

export const updateClient = createAction(
  '[clients] updating client data',
  props<{
    payload: {
      id: string,
      firstName: string,
      lastName: string,
      address: string,
      phoneNumber: string,
      email: string,
      dateOfBirth: Date,
      brandPreference: string,
      colorPreference: string,
      notes: string,
      oldValues: {
        firstName: string,
        lastName: string,
        address: string,
        phoneNumber: string,
        email: string,
        dateOfBirth: Date,
        brandPreference: string,
        colorPreference: string,
        notes: string,
      }
    }
  }>()
);

export const updateClientSuccess = createAction(
  '[clients] updated client data successfully',
  props<{
    payload: {
      id: string,
      firstName: string,
      lastName: string,
      address: string,
      phoneNumber: string,
      email: string,
      dateOfBirth: Date,
      brandPreference: string,
      colorPreference: string,
      notes: string,
      oldValues: {
        firstName: string,
        lastName: string,
        address: string,
        phoneNumber: string,
        email: string,
        dateOfBirth: Date,
        brandPreference: string,
        colorPreference: string,
        notes: string,
      }
    }
  }>()
);

export const updateClientFail = createAction(
  '[clients] updated client data failed',
  props<{
    message: string,
    payload: {
      id: string,
      firstName: string,
      lastName: string,
      address: string,
      phoneNumber: string,
      email: string,
      dateOfBirth: Date,
      brandPreference: string,
      colorPreference: string,
      notes: string,
      oldValues: {
        firstName: string,
        lastName: string,
        address: string,
        phoneNumber: string,
        email: string,
        dateOfBirth: Date,
        brandPreference: string,
        colorPreference: string,
        notes: string,
      }
    }
  }>()
);

// Delete client actions
export const markClientDeleted = createAction(
  '[clients] marking client as deleted',
  props<{ id: string }>()
);

export const markClientDeletedSuccess = createAction(
  '[clients] marking client as deleted success',
  props<{ id: string }>()
);

export const markClientDeletedFail = createAction(
  '[clients] marking client as deleted failed',
  props<{ message: string }>()
);
