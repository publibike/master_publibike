import { TestBed } from '@angular/core/testing';

import { ApiPublibikeMarcaService } from './api-publibike-marca.service';

describe('ApiPublibikeMarcaService', () => {
  let service: ApiPublibikeMarcaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPublibikeMarcaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
