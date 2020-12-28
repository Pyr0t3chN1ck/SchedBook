import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AppointmentsEffects } from './appointments.effects';

describe('AppointmentsEffects', () => {
  // tslint:disable-next-line: prefer-const
  let actions$: Observable<any>;
  let effects: AppointmentsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppointmentsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AppointmentsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
