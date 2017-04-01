import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopOverComponent } from './pop-over.component';

describe('PopOverComponent', () => {
  let component: PopOverComponent;
  let fixture: ComponentFixture<PopOverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopOverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
