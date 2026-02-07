/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VPaginationContentComponent } from './v-pagination-content.component';

describe('VPaginationContentComponent', () => {
  let component: VPaginationContentComponent;
  let fixture: ComponentFixture<VPaginationContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VPaginationContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VPaginationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
