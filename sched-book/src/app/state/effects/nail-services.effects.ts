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
      switchMap(() => this.service.getNailServices().pipe(
        map(results => nailServicesActions.loadNailServicesSucceess({
          payload: results.map(ns => {
            return {
              id: ns.payload.doc.id,
              ...ns.payload.doc.data() as any
            } as NailServiceEntity;
          })
        })),
        catchError(results => of(nailServicesActions.loadNailServicesFail({ message: 'There was an issue loading nail services' })))
      )
      )
    )
  );
}
