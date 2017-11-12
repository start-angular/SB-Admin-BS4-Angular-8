import { PageHeaderModule } from './page-header.module';

describe('PageHeaderModule', () => {
  let pageHeaderModule: PageHeaderModule;

  beforeEach(() => {
    pageHeaderModule = new PageHeaderModule();
  });

  it('should create an instance', () => {
    expect(pageHeaderModule).toBeTruthy();
  });
});
