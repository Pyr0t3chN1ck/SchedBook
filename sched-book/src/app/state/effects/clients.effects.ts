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
      switchMap(() => this.service.getClients()
        .pipe(
          map(results => clientActions.loadClientsSuccess({
            payload: results.map(client => {
              return {
                id: client.payload.doc.id,
                ...client.payload.doc.data() as any,
                dateOfBirth: isNaN(new Date(client.payload.doc.data().dateOfBirth).valueOf()) ?
                  null : new Date(client.payload.doc.data().dateOfBirth)
              } as ClientEntity;
            })
          })),
          catchError(results => of(clientActions.loadClientsFail({ message: 'There was an issue loading clients' })))
        )
      )
    )
  );

  createClient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clientActions.createClient),
      map(action => action.payload),
      switchMap((client) => this.service.addClient(client)
        .pipe(
          map((response) => clientActions.createClientSuccess({
            payload: {
              id: response.id,
              dateOfBirth: client.dateOfBirth ? client.dateOfBirth.toISOString() : '',
              ...client
            } as ClientEntity
          })),
          catchError(err => of(clientActions.createClientFail({
            message: 'There was an issue creating client.',
            payload: client
          }))
          )
        )
      )
    )
  );

  deleteClient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clientActions.markClientDeleted),
      map(action => action.id),
      switchMap((id) => this.service.markClientDeleted(id)
        .pipe(
          map(() => clientActions.markClientDeletedSuccess({ id })),
          catchError(err => of(clientActions.markClientDeletedFail({ message: 'There was an issue deleting client.' })))
        )
      )
    )
  );

  updateEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clientActions.updateClient),
      map(action => action.payload),
      switchMap(client => this.service.updateClient({
        id: client.id,
        firstName: client.firstName,
        lastName: client.lastName,
        address: client.address,
        phoneNumber: client.phoneNumber,
        email: client.email,
        dateOfBirth: client.dateOfBirth ? client.dateOfBirth.toISOString() : '',
        brandPreference: client.brandPreference,
        colorPreference: client.colorPreference,
        notes: client.notes,
      })
        .pipe(
          map(() => clientActions.updateClientSuccess({ payload: client })),
          catchError(err => of(clientActions.updateClientFail({
            message: 'There was an issue updating client.',
            payload: client
          })))
        )
      )
    )
  );
}
