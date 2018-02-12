module.exports = {

    //  url: 'https://www.google.co.in/[a-zA-Z0-9\-_?=]+',

    elements: {

        contactArrangements: by.css('h2[class="page-title"]'),
        createContactArrangementsButton: by.css('[aria-label="Create new contact arrangement"]'),
        arrangedLabel: by.css('#create-new-contact > div > div:nth-child(2) > div > div > label'),
        contactarrangementsWith: by.css('#create-new-contact > div > div:nth-child(2) > div > div #searchMenu1 > div > div input'),
        selectContactArrangementsWith:by.css('#searchMenu1 .selectize-control .selectize-dropdown div:nth-child(2)'),
        contactLevel: by.css('#create-new-contact > div > div:nth-child(4) button'),
        contactWithSupervision: by.css('#create-new-contact > div > div:nth-child(4) ul li:nth-child(3) span:nth-child(2)'),
        supervisionRequiredDetails: by.css('#supervision_required'),
        contactMethods: by.css('#create-new-contact > div > div:nth-child(6) button'),
        contactMethodsOthers: by.css('#create-new-contact > div > div:nth-child(6) ul li:nth-child(6) span:nth-child(2)'),
        contactMethodsOthersDetails: by.css('#create-new-contact > div > div:nth-child(6) > div:nth-child(2) > div input'),
        freqContact: by.css('#create-new-contact > div > div:nth-child(7) > div > div > div > button'),
        freqContactOthers: by.css('#create-new-contact > div > div:nth-child(7) ul li:nth-child(5) span:nth-child(2)'),
        freqContactOthersDetails: by.css('#create-new-contact > div > div:nth-child(7) > div:nth-child(2) > div input'),
        duration_from: by.css('#durationFrom input'),
        //oldDate: by.css('.bootstrap-datetimepicker-widget.dropdown-menu.picker-open.top > div > div.datepicker-days > table > tbody > tr:nth-child(1) > td:nth-child(1)'),
        duration_to: by.css('#durationTo input'),
        //newDate: by.css('.bootstrap-datetimepicker-widget.dropdown-menu.top.picker-open > div > div.datepicker-days > table > tbody > tr:last-child > td:last-child'),
        contactNotes: by.css('#addContactArrangement'),
        addContactArrangementsButton: by.css('[name="Add"]'),
        contactArrangementsDetailsFOR: by.css('.admin-right span:nth-child(1)'),
        contactArrangementsDetailsTO: by.css('.admin-right span:nth-child(1)')
    },


    navigateConsent: function () {
        return driver.wait(until.elementsLocated(page.contactArrangement_page.elements.contactArrangements), 10000)
            .then(function () {
                return driver.findElement(page.contactArrangement_page.elements.contactArrangements).getText()
                    .then(function (text) {
                        expect(text).to.contain("Contact arrangement");
                    })
            });
    },

    isContactArrangementsVisible: function () {
        return driver.findElement(page.contactArrangement_page.elements.contactArrangements).getText()
            .then(function (text) {
                expect(text).to.contain("Contact arrangement");
            })
    },

    createContactArrangements: function () {
        return driver.findElement(page.contactArrangement_page.elements.createContactArrangementsButton).click()
            .then(function () {
                return driver.wait(until.elementsLocated(page.contactArrangement_page.elements.arrangedLabel), 10000)
            })
    },

    setContactArrangements: function (fromDateValue, toDateValue) {
        return driver.wait(until.elementsLocated(page.contactArrangement_page.elements.contactarrangementsWith), 10000)
            .then(function () {
                driver.findElement(page.contactArrangement_page.elements.contactarrangementsWith).sendKeys(config.PersonDetails.placePerName);
                return driver.sleep(3000)
                    .then(function () {
                        driver.sleep(1000);
                        return driver.findElement(page.contactArrangement_page.elements.selectContactArrangementsWith).click()
                            .then(function () {
                                driver.sleep(1000);
                                driver.findElement(page.contactArrangement_page.elements.contactLevel).click()
                                driver.sleep(300);
                                driver.findElement(page.contactArrangement_page.elements.contactWithSupervision).click()
                                driver.sleep(300);
                                driver.findElement(page.contactArrangement_page.elements.supervisionRequiredDetails).sendKeys('Details')
                                driver.sleep(300);
                                driver.findElement(page.contactArrangement_page.elements.contactMethods).click()
                                driver.sleep(300);
                                driver.findElement(page.contactArrangement_page.elements.contactMethodsOthers).click()
                                driver.sleep(300);
                                driver.findElement(page.contactArrangement_page.elements.contactMethodsOthersDetails).sendKeys("test")
                                driver.sleep(300);
                                driver.findElement(page.contactArrangement_page.elements.freqContact).click()
                                driver.sleep(300);
                                driver.findElement(page.contactArrangement_page.elements.freqContactOthers).click()
                                driver.sleep(300);
                                driver.findElement(page.contactArrangement_page.elements.freqContactOthersDetails).sendKeys("test")
                                driver.sleep(300);
                                //date
                                driver.findElement(page.contactArrangement_page.elements.duration_from).click()
                                driver.sleep(300);
                                helpers.gridClickDate('prev', '16');
                                driver.sleep(1000);
                                driver.findElement(page.contactArrangement_page.elements.duration_to).click()
                                driver.sleep(300);
                                helpers.gridClickDate('next', '16');
                                driver.sleep(1000);
                                driver.findElement(page.contactArrangement_page.elements.contactNotes).sendKeys("Notes")
                                return driver.sleep(300);
                            })
                    })
            })
    },

    addContactArrangements: function () {
        driver.findElement(page.contactArrangement_page.elements.addContactArrangementsButton).click()
        return driver.sleep(2000);
    },

    validateContactArrangementsForDetails: function (contArrangeDetails) {
        return driver.findElement(page.contactArrangement_page.elements.contactArrangementsDetailsFOR).getText()
            .then(function (text) {
                console.log(text)
                expect(text).to.contain(contArrangeDetails);
            })
    },

    validateContactArrangementsToDetails: function (contArrangeDetails) {
        return driver.findElement(page.contactArrangement_page.elements.contactArrangementsDetailsTO).getText()
            .then(function (text) {
                console.log(text)
                expect(text).to.contain(contArrangeDetails);
            })
    }

}
