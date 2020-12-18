import { TestBed } from '@angular/core/testing';

import { ApiPublibikeBienestarService } from './api-publibike-bienestar.service';

describe('ApiPublibikeBienestarService', () => {
  let service: ApiPublibikeBienestarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPublibikeBienestarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
