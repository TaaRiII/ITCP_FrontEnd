import { TestBed } from '@angular/core/testing';

import { UserDashboardTableServiceService } from './user-dashboard-table.service.service';

describe('UserDashboardTableServiceService', () => {
  let service: UserDashboardTableServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDashboardTableServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
