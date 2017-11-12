import { TablesModule } from './tables.module';

describe('TablesModule', () => {
  let tablesModule: TablesModule;

  beforeEach(() => {
    tablesModule = new TablesModule();
  });

  it('should create an instance', () => {
    expect(tablesModule).toBeTruthy();
  });
});
