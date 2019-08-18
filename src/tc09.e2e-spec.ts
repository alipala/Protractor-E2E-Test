'use strict'; // necessary for es6 output in node

import { browser, element, by, $$} from "protractor";


describe("Year of publishing takes only numbers as an input",
  function() {
    it('Select first book from the list and update the "Year of publishing" ' +
      'field by using different characters than the numbers',
      function() {
        browser.get('/');
        $$('.mat-nav-list .mat-list-item:nth-child(1)').click();
        var year = element(by.id('mat-input-4')); // Year of publishing
        year.sendKeys("yearofpublishing");
        browser.sleep(2000)
        expect(element(by.css("#mat-form-field-label-9 > span"))
          .getCssValue('color')).toEqual("rgba(244, 67, 54, 1)");

      });
  });


