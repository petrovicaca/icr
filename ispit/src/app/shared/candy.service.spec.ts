import { TestBed, inject } from '@angular/core/testing';

import { CandyService } from './candy.service';

describe('CandyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandyService]
    });
  });

  it('should be created', inject([CandyService], (service: CandyService) => {
    expect(service).toBeTruthy();
  }));
});
