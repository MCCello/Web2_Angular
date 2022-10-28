import { TestBed } from '@angular/core/testing';

import { OneForAllService } from './one-for-all.service';

describe('OneForAllService', () => {
  let service: OneForAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneForAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
