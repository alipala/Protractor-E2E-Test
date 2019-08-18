'use strict'; // necessary for es6 output in node

import { browser, element, by, $$} from "protractor";


describe('User can modify book properties and Save or Cancel the changes through appropriate buttons',
  function() {
    it('Select a book from list to modify "Title, Author,Publisher, Year of publishing" fields and try to save',
      function() {
        browser.get('/');
        $$('.mat-nav-list .mat-list-item:nth-child(4)').click(); // lolita is selected
        var title = element(by.id('mat-input-1'));
        expect(title.getAttribute('value')).toEqual(
          "lolita")
      });

    it("Update Title as lolita_updated_version",
      function () {
        var title = element(by.id('mat-input-1'));
        title.sendKeys("_updated_version");
        element(by.xpath('/html/body/app-root/app-books/div/app-book-details/mat-card/form/mat-card-actions/button[1]')).submit();
        $$("button:nth-child(2)").click();
        expect(title.getAttribute('value')).toEqual("lolita_updated_version");
      });

    it("Update Author as 3_updated_version",
      function () {
        var author = element(by.id('mat-input-2'));
        author.sendKeys("_updated_version");
        element(by.xpath('/html/body/app-root/app-books/div/app-book-details/mat-card/form/mat-card-actions/button[1]')).submit();
        $$("button:nth-child(2)").click();
        expect(author.getAttribute('value')).toEqual("3_updated_version")
      });

    it("Update Publisher as Crocker & Brewster_updated_version",
      function () {
        var publisher = element(by.id('mat-input-3'));
        publisher.sendKeys("_updated_version");
        element(by.xpath('/html/body/app-root/app-books/div/app-book-details/mat-card/form/mat-card-actions/button[1]')).submit();
        $$("button:nth-child(2)").click();
        expect(publisher.getAttribute('value')).toEqual("Crocker & Brewster_updated_version")
      });

    it("Update Year of publishing as 2019",
      function () {
        var publisher = element(by.id('mat-input-4'));
        publisher.clear();
        publisher.sendKeys("2019");
        element(by.xpath('/html/body/app-root/app-books/div/app-book-details/mat-card/form/mat-card-actions/button[1]')).submit();
        $$("button:nth-child(2)").click();
        expect(publisher.getAttribute('value')).toEqual("2019")
      });
  });


