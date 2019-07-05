import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarDiarioPage } from './cadastrar-diario.page';

describe('CadastrarDiarioPage', () => {
  let component: CadastrarDiarioPage;
  let fixture: ComponentFixture<CadastrarDiarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarDiarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarDiarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
