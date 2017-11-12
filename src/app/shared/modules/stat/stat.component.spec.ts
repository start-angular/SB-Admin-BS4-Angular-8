import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatComponent } from './stat.component';

describe('StatComponent', () => {
    let component: StatComponent;
    let fixture: ComponentFixture<StatComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [StatComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(StatComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
