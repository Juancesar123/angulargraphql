import { TestBed } from '@angular/core/testing';

import { BukuserviceService } from './bukuservice.service';

describe('BukuserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BukuserviceService = TestBed.get(BukuserviceService);
    expect(service).toBeTruthy();
  });
});
