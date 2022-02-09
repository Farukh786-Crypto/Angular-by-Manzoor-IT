import { TestBed } from '@angular/core/testing';

import { OmsService } from './oms.service';

describe('OmsService', () => {
  let service: OmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
