import { TestBed } from '@angular/core/testing';

import { HabilityService } from './hability.service';

describe('HabilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HabilityService = TestBed.get(HabilityService);
    expect(service).toBeTruthy();
  });
});
