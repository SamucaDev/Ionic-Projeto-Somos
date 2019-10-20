import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemEsperaPage } from './mensagem-espera.page';

describe('MensagemEsperaPage', () => {
  let component: MensagemEsperaPage;
  let fixture: ComponentFixture<MensagemEsperaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensagemEsperaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagemEsperaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
