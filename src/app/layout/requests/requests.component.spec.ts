import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RequestsModule } from './requests.module';

describe('RequestsComponent', () => {
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [RequestsModule, RouterTestingModule]
        }).compileComponents();
    }));

    it('should create', () => {
        const fixture = TestBed.createComponent(RequestsModule);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
