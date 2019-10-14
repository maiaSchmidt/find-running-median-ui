import { TestBed } from '@angular/core/testing';
import { MedianService } from './median.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MedianServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
  }));

  it('should be created', () => {
    const service: MedianService = TestBed.get(MedianService);
    expect(service).toBeTruthy();
  });
});
