import { TestBed } from '@angular/core/testing';

import { TestAPIService } from './test-api.service';

describe('TestAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestAPIService = TestBed.get(TestAPIService);
    expect(service).toBeTruthy();
  });
});
