/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AboutValueComponent } from './about-value.component';

describe('AboutValueComponent', () => {
  let component: AboutValueComponent;
  let fixture: ComponentFixture<AboutValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
