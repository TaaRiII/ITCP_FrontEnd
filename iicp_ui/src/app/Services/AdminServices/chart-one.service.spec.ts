import { TestBed } from '@angular/core/testing';

import { ChartOneService } from './chart-one.service';

describe('ChartOneService', () => {
  let service: ChartOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
