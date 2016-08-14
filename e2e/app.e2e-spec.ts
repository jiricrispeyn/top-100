import { Top100Page } from './app.po';

describe('top-100 App', function() {
  let page: Top100Page;

  beforeEach(() => {
    page = new Top100Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
