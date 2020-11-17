import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ClientService } from 'src/app/shared/services/client.service';
import * as clientActions from '../actions/clients.actions';
import { ClientEntity } from '../reducers/clients.reducer';

@Injectable()
export class ClientsEffects {

  constructor(private actions$: Actions, private service: ClientService) { }

  loadClients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clientActions.loadClients),
      switchMap(() => this.service.getClients().pipe(
        map(results => clientActions.loadClientsSuccess({
          payload: results.map(client => {
            return {
              id: client.payload.doc.id,
              ...client.payload.doc.data() as any
            } as ClientEntity;
          })
        })),
        catchError(results => of(clientActions.loadClientsFail({ message: 'There was an issue loading clients' })))
      )
      )
    )
  );
}
