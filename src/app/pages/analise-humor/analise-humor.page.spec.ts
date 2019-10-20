import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseHumorPage } from './analise-humor.page';

describe('AnaliseHumorPage', () => {
  let component: AnaliseHumorPage;
  let fixture: ComponentFixture<AnaliseHumorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnaliseHumorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaliseHumorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
