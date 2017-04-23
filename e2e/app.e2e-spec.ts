import { BringitonPage } from './app.po';

describe('bringiton App', () => {
  let page: BringitonPage;

  beforeEach(() => {
    page = new BringitonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
