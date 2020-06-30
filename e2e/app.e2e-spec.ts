import { RedditCardsPage } from './app.po';

describe('reddit-cards App', function() {
  let page: RedditCardsPage;

  beforeEach(() => {
    page = new RedditCardsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
