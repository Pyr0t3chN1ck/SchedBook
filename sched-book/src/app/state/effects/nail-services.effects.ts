import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { NailServicesService } from 'src/app/shared/services/nail-services.service';
import * as nailServicesActions from '../actions/nail-services.actions';
import { NailServiceEntity } from '../reducers/nail-services.reducer';

@Injectable()
export class NailServicesEffects {

  constructor(private actions$: Actions, private service: NailServicesService) { }

  loadNailServices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(nailServicesActions.loadNailServices),
      switchMap(() => this.service.getNailServices()
        .pipe(
          map(results => nailServicesActions.loadNailServicesSucceess({
            payload: results.map(ns => {
              return {
                id: ns.payload.doc.id,
                ...ns.payload.doc.data() as any
              } as NailServiceEntity;
            })
          })),
          catchError(err => of(nailServicesActions.loadNailServicesFail({ message: 'There was an issue loading nail services' })))
        )
      )
    )
  );

  createNailService$ = createEffect(() =>
    this.actions$.pipe(
      ofType(nailServicesActions.createNailService),
      map(action => action.payload),
      switchMap((ns) => this.service.addNailService(ns)
        .pipe(
          map((response) => nailServicesActions.createNailServiceSuccess({
            payload: {
              id: response.id,
              ...ns
            } as NailServiceEntity
          })),
          catchError(err => of(nailServicesActions.createNailServiceFail({
            message: 'There was an issue creating nail service.',
            payload: ns
          }))
          )
        )
      )
    )
  );

  deleteNailService$ = createEffect(() =>
    this.actions$.pipe(
      ofType(nailServicesActions.markNailServiceDeleted),
      map(action => action.id),
      switchMap((id) => this.service.markNailServiceDeleted(id)
        .pipe(
          map(() => nailServicesActions.markNailServiceDeletedSuccess({ id })),
          catchError(err => of(nailServicesActions.markNailServiceDeletedFail({ message: 'There was an issue deleting nail service.' })))
        )
      )
    )
  );

  updateEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(nailServicesActions.updateNailService),
      map(action => action.payload),
      switchMap(ns => this.service.updateNailService({ id: ns.id, name: ns.name, price: ns.price })
        .pipe(
          map(() => nailServicesActions.updateNailServiceSucceess({ payload: ns })),
          catchError(err => of(nailServicesActions.updateNailServiceFail({
            message: 'There was an issue updating nail service.',
            payload: ns
          })))
        )
      )
    )
  );
}
