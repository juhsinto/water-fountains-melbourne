import { WaterPage } from './app.po';

describe('water App', function() {
  let page: WaterPage;

  beforeEach(() => {
    page = new WaterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
