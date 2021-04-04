import { TestBed } from '@angular/core/testing';

import { DoctorPatientListServiceService } from './doctor-patient-list-service.service';

describe('DoctorPatientListServiceService', () => {
  let service: DoctorPatientListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorPatientListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
