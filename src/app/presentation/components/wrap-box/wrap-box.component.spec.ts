import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapBoxComponent } from './wrap-box.component';

describe('WrapBoxComponent', () => {
  let component: WrapBoxComponent;
  let fixture: ComponentFixture<WrapBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
