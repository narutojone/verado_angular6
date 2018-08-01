import { Verado2Page } from './app.po';

describe('Verado2 App', () => {
    let page: Verado2Page;

    beforeEach(() => {
        page = new Verado2Page();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to Verado2!');
    });
});
