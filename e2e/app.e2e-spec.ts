import { NgCompleteProjectPage } from './app.po';

describe('ng-complete-project App', () => {
  let page: NgCompleteProjectPage;

  beforeEach(() => {
    page = new NgCompleteProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
