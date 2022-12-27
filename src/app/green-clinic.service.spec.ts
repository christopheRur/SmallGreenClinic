import { TestBed } from '@angular/core/testing';

import { GreenClinicService } from './green-clinic.service';

describe('GreenClinicService', () => {
  let service: GreenClinicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreenClinicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
