import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TablesComponent } from './tables.component';
import { TablesModule } from './tables.module';

describe('TablesComponent', () => {
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [TablesModule, RouterTestingModule]
        }).compileComponents();
    }));

    it('should create', () => {
        const fixture = TestBed.createComponent(TablesComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
