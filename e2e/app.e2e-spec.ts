import { AplicativoPage } from './app.po';

describe('aplicativo App', function() {
  let page: AplicativoPage;

  beforeEach(() => {
    page = new AplicativoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
