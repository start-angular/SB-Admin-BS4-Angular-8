import { ChartsModule } from './charts.module';

describe('ChartsModule', () => {
    let chartsModule: ChartsModule;

    beforeEach(() => {
        chartsModule = new ChartsModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
