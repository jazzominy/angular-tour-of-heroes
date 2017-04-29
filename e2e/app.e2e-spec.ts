import { QuickStartNg4Page } from './app.po';

describe('quick-start-ng4 App', () => {
  let page: QuickStartNg4Page;

  beforeEach(() => {
    page = new QuickStartNg4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
