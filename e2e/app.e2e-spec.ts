import { PracticePTEPage } from './app.po';

describe('practice-pte App', () => {
  let page: PracticePTEPage;

  beforeEach(() => {
    page = new PracticePTEPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
