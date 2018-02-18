import { RestaurantsModule } from './restaurants.module';

describe('BlankPageModule', () => {
    let restaurantsModule: RestaurantsModule;

    beforeEach(() => {
        restaurantsModule = new RestaurantsModule();
    });

    it('should create an instance', () => {
        expect(restaurantsModule).toBeTruthy();
    });
});
