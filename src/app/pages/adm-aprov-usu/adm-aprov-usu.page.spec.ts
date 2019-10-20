import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmAprovUsuPage } from './adm-aprov-usu.page';

describe('AdmAprovUsuPage', () => {
  let component: AdmAprovUsuPage;
  let fixture: ComponentFixture<AdmAprovUsuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmAprovUsuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmAprovUsuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
