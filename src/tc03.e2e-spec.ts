'use strict'; // necessary for es6 output in node

import { browser, element, by, $$} from "protractor";


describe("User can delete the book.The book will disappear from the list along with it's details.",
  function() {
    it('Select "lolita" from the list to delete.',
      function() {
        browser.get('/');
        element(by.xpath("/html/body/app-root/app-books/div/div/mat-nav-list/mat-list-item[4]/div/mat-icon[2]"))
          .click();
      });

    it('Verify to number of items as 6',
      function() {
        var elements = $$('.mat-nav-list .mat-list-item');
        expect(elements.count()).toEqual(6);
      });
  });


