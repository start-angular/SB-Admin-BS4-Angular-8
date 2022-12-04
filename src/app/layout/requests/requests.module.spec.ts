import { RequestsModule } from './requests.module';

describe('RequestsModule', () => {
    let requestsModule: RequestsModule;

    beforeEach(() => {
        requestsModule = new RequestsModule();
    });

    it('should create an instance', () => {
        expect(requestsModule).toBeTruthy();
    });
});
