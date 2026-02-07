/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HPaginationContentComponent } from './h-pagination-content.component';

describe('HPaginationContentComponent', () => {
  let component: HPaginationContentComponent;
  let fixture: ComponentFixture<HPaginationContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HPaginationContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HPaginationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
