import { TestBed } from '@angular/core/testing';

import { DoctorListServiceService } from './doctor-list-service.service';

describe('DoctorListServiceService', () => {
  let service: DoctorListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
