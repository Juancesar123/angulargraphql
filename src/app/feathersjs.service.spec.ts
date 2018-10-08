import { TestBed } from '@angular/core/testing';

import { FeathersjsService } from './feathersjs.service';

describe('FeathersjsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeathersjsService = TestBed.get(FeathersjsService);
    expect(service).toBeTruthy();
  });
});
