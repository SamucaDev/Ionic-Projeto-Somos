import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermoDeUsoPage } from './termo-de-uso.page';

describe('TermoDeUsoPage', () => {
  let component: TermoDeUsoPage;
  let fixture: ComponentFixture<TermoDeUsoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermoDeUsoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermoDeUsoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
