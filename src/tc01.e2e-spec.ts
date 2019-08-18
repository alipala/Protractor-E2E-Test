'use strict'; // necessary for es6 output in node

import { browser, element, by, $$} from "protractor";


describe('Book names are displayed in the list',
  function() {
    it('Check number of books',
      function() {
        browser.get('/');
        var elements = $$('.mat-nav-list .mat-list-item');
        expect(elements.count()).toEqual(7);

      });
  });


