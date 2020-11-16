import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { NailServicesEffects } from './nail-services.effects';

describe('NailServicesEffects', () => {
  let actions$: Observable<any>;
  let effects: NailServicesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NailServicesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(NailServicesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
