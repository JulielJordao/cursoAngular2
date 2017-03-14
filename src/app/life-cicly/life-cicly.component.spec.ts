/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LifeCiclyComponent } from './life-cicly.component';

describe('LifeCiclyComponent', () => {
  let component: LifeCiclyComponent;
  let fixture: ComponentFixture<LifeCiclyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeCiclyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCiclyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
