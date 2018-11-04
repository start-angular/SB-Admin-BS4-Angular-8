import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsElementComponent } from './bs-element.component';
import { BsElementModule } from './bs-element.module';

describe('BsElementComponent', () => {
  let component: BsElementComponent;
  let fixture: ComponentFixture<BsElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BsElementModule, RouterTestingModule, BrowserAnimationsModule]
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
