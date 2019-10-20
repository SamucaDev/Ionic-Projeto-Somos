import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostVerificacaoPage } from './post-verificacao.page';

describe('PostVerificacaoPage', () => {
  let component: PostVerificacaoPage;
  let fixture: ComponentFixture<PostVerificacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostVerificacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostVerificacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
