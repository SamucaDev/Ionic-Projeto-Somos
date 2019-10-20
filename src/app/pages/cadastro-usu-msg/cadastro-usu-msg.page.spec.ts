import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroUsuMsgPage } from './cadastro-usu-msg.page';

describe('CadastroUsuMsgPage', () => {
  let component: CadastroUsuMsgPage;
  let fixture: ComponentFixture<CadastroUsuMsgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroUsuMsgPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroUsuMsgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
