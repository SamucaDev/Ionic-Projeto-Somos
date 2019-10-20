import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciarPostPage } from './denunciar-post.page';

describe('DenunciarPostPage', () => {
  let component: DenunciarPostPage;
  let fixture: ComponentFixture<DenunciarPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenunciarPostPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenunciarPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
