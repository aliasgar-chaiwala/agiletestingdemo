module.exports = {
  elements: {
    appToggle: by.css('#htAppToggle'),
    statReturnicon: by.css('#htAppContainer a.ht-app.ht-app-stat'),
    periodDiv: by.css('#headingOne div.dropdown.inline.border'),
    pageTitle: by.css('.page-content .page-title'),
    button: by.css('#dropdownMenu1'),
    collectionPeriodtext: by.css('#headingOne .col-sm-6 p:nth-child(1)'),
    selectYeardropDown: by.css('#headingOne div.dropdown.inline.border'),
    generateXMLbutton: by.css('button[data-bind*="generateXMLReport"]'),
    uploadPeriodText: by.css('#headingOne .col-sm-6 p:nth-child(2)'),
    cancelDownloadButton: by.css('.alert-dismissible span[data-bind*="visible:isDataPresent"] button')
  },
  selectPeriod: function (year) {
    driver.sleep(1000);
    return helpers.clickIncludesList(page.statutoryReturn_page.elements.selectYeardropDown, 'button', by.css('li a'), year)
      .then(function () {
        return helpers.clickIncludesList(by.css('#headingOne div.dropdown.inline.border'), 'button', by.css('li a'), year)
          .then(function () {
            return driver.findElement(page.statutoryReturn_page.elements.collectionPeriodtext).getText()
              .then(function (actualCollectionPeriod) {
                yearexract = year.split("-");
                expectedCollectionPeriod = "Collection period :" + " 01/04/" + yearexract[0] + " to" + " 31/03/" + yearexract[1];
                expect(actualCollectionPeriod).to.equal(expectedCollectionPeriod)
                return driver.findElement(page.statutoryReturn_page.elements.uploadPeriodText).getText()
                  .then(function (actualUploadPeriod) {
                    if (year === '2017-2018') {
                      expecteduploadPeriod = "Upload Period :" + " 02/04/" + yearexract[1] + " to" + " 31/07/" + yearexract[1];
                    }
                    else if (year === '2018-2019') {
                      expecteduploadPeriod = "Upload Period :" + " 01/04/" + yearexract[1] + " to" + " 31/07/" + yearexract[1];
                    }
                    expect(actualUploadPeriod).to.equal(expecteduploadPeriod);
                    return driver.findElement(page.statutoryReturn_page.elements.generateXMLbutton).isDisplayed()
                      .then(function (isDisplayedFlag) {
                        return expect(isDisplayedFlag).to.be.true;
                      });
                  });
              });
          });
      });
  },
  verifyGenerateXMLButtonClick: function () {
    return driver.findElement(page.statutoryReturn_page.elements.generateXMLbutton).click().then(function () {
      return driver.wait(until.elementIsVisible(driver.findElement(page.statutoryReturn_page.elements.cancelDownloadButton)), 50000, 'Cancel button is not visible')
        .then(function () {
          return driver.findElement(page.statutoryReturn_page.elements.generateXMLbutton).isEnabled()
            .then(function (isGenerateXMLButtonEnabled) {
              expect(isGenerateXMLButtonEnabled).to.be.false;
              return driver.findElement(page.statutoryReturn_page.elements.cancelDownloadButton).click().then(function () {
                return driver.findElement(page.statutoryReturn_page.elements.generateXMLbutton).isEnabled()
                  .then(function (isGenerateXMLButtonEnabled) {
                    expect(isGenerateXMLButtonEnabled).to.be.true;
                  });
              });
            });
        });
    });
  }
}
