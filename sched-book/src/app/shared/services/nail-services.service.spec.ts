import { TestBed } from '@angular/core/testing';

import { NailServicesService } from './nail-services.service';

describe('NailServicesService', () => {
  let service: NailServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NailServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
