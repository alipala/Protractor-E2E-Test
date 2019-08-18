'use strict'; // necessary for es6 output in node

import { browser, element, by, $$} from "protractor";


describe('Filtration can be dropped by erasing the filter criteria.',
  function() {
    it('Delete "infi" to see the dropped.',
      function() {
        browser.get('/');
        element(by.id('mat-input-0')).clear();
        browser.sleep(3000)
        var elements = $$('.mat-nav-list .mat-list-item');
        expect(elements.count()).toEqual(7);


      });
  });


