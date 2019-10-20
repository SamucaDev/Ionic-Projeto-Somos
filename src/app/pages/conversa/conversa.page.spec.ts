import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversaPage } from './conversa.page';

describe('ConversaPage', () => {
  let component: ConversaPage;
  let fixture: ComponentFixture<ConversaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
