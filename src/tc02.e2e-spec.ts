'use strict'; // necessary for es6 output in node

import { browser, element, by, $$} from "protractor";


describe('User can select book from the list: book details will be displayed as a separate card',
  function() {
    it('Select "desert solitaire" book',
      function() {
        browser.get('/');
        $$('.mat-nav-list .mat-list-item:nth-child(2)').click();
        //browser.sleep(5000)

      });
    it('Read Title',
      function () {
        var title = element(by.id('mat-input-1'));
        expect(title.getAttribute('value')).toEqual(
          "desert solitaire")
      });

    it('Read Author',
      function () {
        var author = element(by.id('mat-input-2'));
        expect(author.getAttribute('value')).toEqual(
          "2")
      });

    it('Read Publisher',
      function () {

        var publisher = element(by.id('mat-input-3'));
        expect(publisher.getAttribute('value')).toEqual(
          "Berkley Books")
      });

    it('Read Year of publishing',
      function () {

        var year = element(by.id('mat-input-4'));
        expect(year.getAttribute('value')).toEqual(
          "1913")
      });
  });
