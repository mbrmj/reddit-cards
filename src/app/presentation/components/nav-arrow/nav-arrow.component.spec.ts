/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavArrowComponent } from './nav-arrow.component';

describe('NavArrowComponent', () => {
  let component: NavArrowComponent;
  let fixture: ComponentFixture<NavArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
