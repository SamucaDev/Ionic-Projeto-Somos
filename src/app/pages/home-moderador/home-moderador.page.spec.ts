import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeModeradorPage } from './home-moderador.page';

describe('HomeModeradorPage', () => {
  let component: HomeModeradorPage;
  let fixture: ComponentFixture<HomeModeradorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeModeradorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeModeradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
