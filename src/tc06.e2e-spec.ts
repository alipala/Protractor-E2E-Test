'use strict'; // necessary for es6 output in node

import { browser, element, by, $$} from "protractor";


describe("Book has the following fields: 'Title', 'Author', 'Publisher', 'Year of publishing'",
  function() {
    it("Select 'giovanni's room' from the list",
      function() {
        browser.get('/');
        $$('.mat-nav-list .mat-list-item:nth-child(1)').click();

      });

    it('Read Title',
      function () {
        var title = element(by.id('mat-input-1'));
        expect(title.getAttribute('value')).toEqual(
          "giovanni's room")
      });

    it('Read Author',
      function () {
        var author = element(by.id('mat-input-2'));
        expect(author.getAttribute('value')).toEqual(
          "1")
      });

    it('Read Publisher',
      function () {

        var publisher = element(by.id('mat-input-3'));
        expect(publisher.getAttribute('value')).toEqual(
          "Ablex Publishing")
      });

    it('Read Year of publishing',
      function () {

        var year = element(by.id('mat-input-4'));
        expect(year.getAttribute('value')).toEqual(
          "1969")
      });
  });


