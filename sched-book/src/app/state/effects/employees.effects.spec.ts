import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { EmployeesEffects } from './employees.effects';

describe('EmployeesEffects', () => {
  const actions$: Observable<any> = new Observable();
  let effects: EmployeesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EmployeesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(EmployeesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
