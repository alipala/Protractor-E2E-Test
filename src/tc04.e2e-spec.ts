'use strict'; // necessary for es6 output in node

import { browser, element, by, $$} from "protractor";


describe('User should be able to filter out the books by book name ' +
  'or part of book name. Filtration is case insensitive.',
  function() {
    it('Type "infi" with lowercase',
      function() {
        browser.get('/');
        var filter = element(by.id('mat-input-0'));
        filter.sendKeys("infi");
        var listItem = $$('.mat-nav-list .mat-list-item .mat-list-text a');
        expect(listItem.getText()).toContain("infinite jest");
        //expect(element(by.tagName('a')).getText()).toBe('Google');
      });

    it('Type "İnfi" with uppercase ',
      function () {
        browser.get('/');
        var filter = element(by.id('mat-input-0'));
        filter.sendKeys("İnfi");
        var emptyList = $$('.mat-nav-list .mat-list-item');
        expect(emptyList.count()).toEqual(0);
      });
  });


