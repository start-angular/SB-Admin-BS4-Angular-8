import { ServerErrorModule } from './server-error.module';

describe('ServerErrorModule', () => {
  let serverErrorModule: ServerErrorModule;

  beforeEach(() => {
    serverErrorModule = new ServerErrorModule();
  });

  it('should create an instance', () => {
    expect(serverErrorModule).toBeTruthy();
  });
});
