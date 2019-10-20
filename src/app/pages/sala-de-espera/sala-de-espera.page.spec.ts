import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaDeEsperaPage } from './sala-de-espera.page';

describe('SalaDeEsperaPage', () => {
  let component: SalaDeEsperaPage;
  let fixture: ComponentFixture<SalaDeEsperaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaDeEsperaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaDeEsperaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
