import { StatModule } from './stat.module';

describe('StatModule', () => {
    let statModule: StatModule;

    beforeEach(() => {
        statModule = new StatModule();
    });

    it('should create an instance', () => {
        expect(statModule).toBeTruthy();
    });
});
