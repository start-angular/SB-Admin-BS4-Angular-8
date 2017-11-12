import { BsComponentModule } from './bs-component.module';

describe('BsComponentModule', () => {
    let bsComponentModule: BsComponentModule;

    beforeEach(() => {
        bsComponentModule = new BsComponentModule();
    });

    it('should create an instance', () => {
        expect(bsComponentModule).toBeTruthy();
    });
});
