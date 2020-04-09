import { GridModule } from './grid.module';

describe('GridModule', () => {
    let gridModule: GridModule;

    beforeEach(() => {
        gridModule = new GridModule();
    });

    it('should create an instance', () => {
        expect(gridModule).toBeTruthy();
    });
});
