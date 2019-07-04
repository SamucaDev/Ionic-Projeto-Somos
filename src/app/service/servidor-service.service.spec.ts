import { TestBed } from '@angular/core/testing';

import { ServidorService } from './servidor-service.service';

describe('ServidorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServidorService = TestBed.get(ServidorService);
    expect(service).toBeTruthy();
  });
});
