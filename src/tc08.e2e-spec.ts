'use strict'; // necessary for es6 output in node

import { browser, element, by, $$} from "protractor";


describe("'Title', 'Author', 'Publisher' fields can take any symbols as an input",
  function() {
    it("Select 'if on a Winter's Night a Traveler book",
      function () {
        browser.get('/');
        $$('.mat-nav-list .mat-list-item:nth-child(6)').click();
        var title = element(by.id('mat-input-1'));
        expect(title.getAttribute('value')).toEqual(
          "if on a Winter's Night a Traveler")
      });

    it("Update Title field by adding with special characters at the end of the title",
      function () {
        var title = element(by.id('mat-input-1'));
        title.sendKeys("!'^+%&/()=?_-");
        element(by.xpath('/html/body/app-root/app-books/div/app-book-details/mat-card/form/mat-card-actions/button[1]')).submit();
        $$("button:nth-child(2)").click();
        expect(title.getAttribute('value')).toEqual("if on a Winter's Night a Traveler!'^+%&/()=?_-");


      });

    it("Update Author field by adding with special characters at the end of the title",
      function () {
        var author = element(by.id('mat-input-2'));
        author.sendKeys("!'^+%&/()=?_-");
        element(by.xpath('/html/body/app-root/app-books/div/app-book-details/mat-card/form/mat-card-actions/button[1]')).submit();
        $$("button:nth-child(2)").click();

        expect(author.getAttribute('value')).toEqual("2!'^+%&/()=?_-")
      });

    it("Update Publisher field by adding with special characters at the end of the title",
      function () {
        var publisher = element(by.id('mat-input-3'));
        publisher.clear();
        publisher.sendKeys("!'^+%&/()=?_-Myriad Editions");
        element(by.xpath('/html/body/app-root/app-books/div/app-book-details/mat-card/form/mat-card-actions/button[1]')).submit();
        $$("button:nth-child(2)").click();

        expect(publisher.getAttribute('value')).toEqual("!'^+%&/()=?_-Myriad Editions")
      });
  });


