import { SignupModule } from './signup.module';

describe('SignupModule', () => {
  let signupModule: SignupModule;

  beforeEach(() => {
    signupModule = new SignupModule();
  });

  it('should create an instance', () => {
    expect(signupModule).toBeTruthy();
  });
});
