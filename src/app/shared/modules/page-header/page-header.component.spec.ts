import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { PageHeaderComponent } from './page-header.component'
import { PageHeaderModule } from './page-header.module'

describe('PageHeaderComponent', () => {
  let component: PageHeaderComponent
  let fixture: ComponentFixture<PageHeaderComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PageHeaderModule, RouterTestingModule],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
