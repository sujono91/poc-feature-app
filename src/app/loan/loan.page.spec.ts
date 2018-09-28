import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanPage } from './loan.page';

describe('LoanPage', () => {
  let component: LoanPage;
  let fixture: ComponentFixture<LoanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
