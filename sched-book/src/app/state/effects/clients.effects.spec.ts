import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ClientsEffects } from './clients.effects';

describe('ClientsEffects', () => {
  let actions$: Observable<any>;
  let effects: ClientsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ClientsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ClientsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
