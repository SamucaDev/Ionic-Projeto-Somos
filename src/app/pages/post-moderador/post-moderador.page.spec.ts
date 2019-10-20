import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostModeradorPage } from './post-moderador.page';

describe('PostModeradorPage', () => {
  let component: PostModeradorPage;
  let fixture: ComponentFixture<PostModeradorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostModeradorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostModeradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
