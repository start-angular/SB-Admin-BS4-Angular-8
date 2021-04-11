import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ServerErrorComponent } from './server-error.component';

describe('ServerErrorComponent', () => {
    let component: ServerErrorComponent;
    let fixture: ComponentFixture<ServerErrorComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ServerErrorComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ServerErrorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
