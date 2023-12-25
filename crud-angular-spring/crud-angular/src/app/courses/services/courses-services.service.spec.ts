import { TestBed } from '@angular/core/testing';

import { CoursesServicesService } from './courses-services.service';

describe('CoursesServicesService', () => {
  let service: CoursesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
