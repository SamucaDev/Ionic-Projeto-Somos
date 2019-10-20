import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaPage } from './rota.page';

describe('RotaPage', () => {
  let component: RotaPage;
  let fixture: ComponentFixture<RotaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
