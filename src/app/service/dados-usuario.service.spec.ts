import { TestBed } from '@angular/core/testing';

import { DadosUsuarioService } from './dados-usuario.service';

describe('DadosUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DadosUsuarioService = TestBed.get(DadosUsuarioService);
    expect(service).toBeTruthy();
  });
});
