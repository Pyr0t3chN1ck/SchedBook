import { createAction, props } from '@ngrx/store';
import { NailServiceCreatePayload } from 'src/app/shared/models/index';
import { NailServiceEntity } from '../reducers/nail-services.reducer';

// Loading nail service actions
export const loadNailServices = createAction(
  '[nail-services] loading nail service data'
);

export const loadNailServicesSucceess = createAction(
  '[nail-services] loaded nail service data successfully',
  props<{ payload: NailServiceEntity[] }>()
);

export const loadNailServicesFail = createAction(
  '[nail-services] loading nail service data failed',
  props<{ message: string }>()
);

// Adding nail service actions
export const createNailService = createAction(
  '[nail-services] adding nail service',
  (createPayload: NailServiceCreatePayload) => ({
    payload: {
      ...createPayload,
      isDeleted: false
    } as NailServiceEntity
  })
);

export const createNailServiceSuccess = createAction(
  '[nail-services] nail service added successfully',
  props<{ payload: NailServiceEntity }>()
);

export const createNailServiceFail = createAction(
  '[nail-services] nail service added failed',
  props<{ message: string, payload: NailServiceEntity }>()
);

// Update nail service actions
export const updateNailService = createAction(
  '[nail-services] updating nail service data',
  props<{
    payload: {
      id: string,
      name: string,
      price: number,
      oldValues: { name: string, price: number }
    }
  }>()
);

export const updateNailServiceSucceess = createAction(
  '[nail-services] updated nail service data successfully',
  props<{
    payload: {
      id: string,
      name: string,
      price: number,
      oldValues: { name: string, price: number }
    }
  }>()
);

export const updateNailServiceFail = createAction(
  '[nail-services] updating nail service data failed',
  props<{
    message: string,
    payload: {
      id: string,
      name: string,
      price: number,
      oldValues: { name: string, price: number }
    }
  }>()
);

// Delete nail service actions
export const markNailServiceDeleted = createAction(
  '[nail-services] marking nail service as deleted',
  props<{ id: string }>()
);

export const markNailServiceDeletedSuccess = createAction(
  '[nail-services] marking nail service as deleted success',
  props<{ id: string }>()
);

export const markNailServiceDeletedFail = createAction(
  '[nail-services] marking nail service as deleted failed',
  props<{ message: string }>()
);
