import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatProfissionalPage } from './chat-profissional.page';

describe('ChatProfissionalPage', () => {
  let component: ChatProfissionalPage;
  let fixture: ComponentFixture<ChatProfissionalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatProfissionalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatProfissionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
