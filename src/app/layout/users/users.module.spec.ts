import { UsersModule } from './users.module';

describe('UsersModule', () => {
    let usersModule: UsersModule;

    beforeEach(() => {
        usersModule = new UsersModule();
    });

    it('should create an instance', () => {
        expect(usersModule).toBeTruthy();
    });
});
