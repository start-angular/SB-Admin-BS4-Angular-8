import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BsComponentModule } from '../../bs-component.module';

import { TooltipComponent } from './tooltip.component';

describe('TooltipComponent', () => {
    let component: TooltipComponent;
    let fixture: ComponentFixture<TooltipComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BsComponentModule, RouterTestingModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TooltipComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
