import { TestBed } from '@angular/core/testing';

import { MedianService } from './median.service';

describe('MedianServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedianService = TestBed.get(MedianService);
    expect(service).toBeTruthy();
  });
});
