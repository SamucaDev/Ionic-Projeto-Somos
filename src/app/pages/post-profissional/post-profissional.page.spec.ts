import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProfissionalPage } from './post-profissional.page';

describe('PostProfissionalPage', () => {
  let component: PostProfissionalPage;
  let fixture: ComponentFixture<PostProfissionalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostProfissionalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostProfissionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
