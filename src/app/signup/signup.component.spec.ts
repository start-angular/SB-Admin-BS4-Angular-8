import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { SignupComponent } from './signup.component'
import { SignupModule } from './signup.module'

describe('SignupComponent', () => {
  let component: SignupComponent
  let fixture: ComponentFixture<SignupComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SignupModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
