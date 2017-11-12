import { BsElementModule } from './bs-element.module';

describe('BsElementModule', () => {
    let bsElementModule: BsElementModule;

    beforeEach(() => {
        bsElementModule = new BsElementModule();
    });

    it('should create an instance', () => {
        expect(bsElementModule).toBeTruthy();
    });
});
