import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { RatingComponent } from './rating.component'
import { BsComponentModule } from '../../bs-component.module'

describe('RatingComponent', () => {
  let component: RatingComponent
  let fixture: ComponentFixture<RatingComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [BsComponentModule, RouterTestingModule],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
