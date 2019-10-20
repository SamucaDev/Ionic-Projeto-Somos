import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirecionamentoCadastroPage } from './direcionamento-cadastro.page';

describe('DirecionamentoCadastroPage', () => {
  let component: DirecionamentoCadastroPage;
  let fixture: ComponentFixture<DirecionamentoCadastroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirecionamentoCadastroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirecionamentoCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
