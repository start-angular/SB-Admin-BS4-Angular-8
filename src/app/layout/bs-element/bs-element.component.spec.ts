import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsElementComponent } from './bs-element.component';

describe('BsElementComponent', () => {
  let component: BsElementComponent;
  let fixture: ComponentFixture<BsElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
