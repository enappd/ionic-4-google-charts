import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPage } from './area.page';

describe('AreaPage', () => {
  let component: AreaPage;
  let fixture: ComponentFixture<AreaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
