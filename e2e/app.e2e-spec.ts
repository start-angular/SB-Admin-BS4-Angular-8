import { CliStablePage } from './app.po';

describe('cli-stable App', () => {
  let page: CliStablePage;

  beforeEach(() => {
    page = new CliStablePage();
  });

  it('should display message SB Admin BS4 Angular4', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('SB Admin BS4 Angular4');
  });
});
