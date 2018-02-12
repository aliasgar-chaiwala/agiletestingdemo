module.exports = {

    //  url: 'https://www.google.co.in/[a-zA-Z0-9\-_?=]+',

    elements: {

        warningIcon: by.css('a.icon-details-warnings'),
        warningPageTitle: by.css('h2.page-title'),
        warningPageHeading: by.css('h2[class="page-title"]'),
        //warningSection: by.css('div[class="section-wraper warning-setion-wrapper"]'),
        warningSection: by.css('.icon-details #warnings.icon-details-warnings.personbanner-icons-disabled_warning_hover'),
        createWarningIcon: by.css('div[class="hatrickIcons icon-alert-add"]'),
        newWarningSection: by.css('div[class="accordion-style1 panel-group warnings"]'), //need name tag

        newWarningRedIcon: by.css('i[class="hatrickIcons icon-alert red"]'),
        warningSelectDropDown: by.css('.panel-group.warnings div[name="addNewWarning"]'),

        warningComments: by.css('.panel-group.warnings [id="Comments"]'),
        warningClientAw: by.css('.panel-group.warnings input[name="check"]'),

        newWarningDatePicker: by.css('.panel-group.warnings div.input-group.datepicker-panel input[type="text"]'),
        warningAttachments: by.css('.panel-group.warnings button[class="btn btn-secondary dz-clickable"]'), //need name tag - unique

        createWarningSubmit: by.css('.panel-group.warnings button[type="submit"]'),

        createdWarningPanel: by.css('div[class="panel panel-default event-form"]'),
        createdWarningAccordion: by.css('div[class="accordion-style1 panel-group warnings"]'),
        createdwarningTitle: by.css('span[class="warningTitle"]'), //multiple elements need unique selector

        editWarning: by.css('button[id="editButton_0"]'),
        editWarningTitle: by.css('.non-serious-warng select[id="WarningTitle"]'),

        notificationPanelClose: by.css('button[data-bind*="hideNotificationPanel"]'),
        warningIconHoveredTexts: by.css('div.dropdown-warning.open span'),
        warningBlock: by.css('a.accordion-toggle.non-serious-warng'),
    },


    navigateWarning: function () {

        return driver.wait(until.elementsLocated(page.warning_page.elements.warningIcon), 10000)
            .then(function () {

                return driver.findElement(page.warning_page.elements.warningIcon).click();
            });
    },


    verifyWarningPage: function () {
        return driver.wait(until.elementsLocated(page.warning_page.elements.warningSection), 10000)
            .then(function () {
                driver.getTitle().then(function (pageTitle) {
                    expect(pageTitle).to.contain("Person | One Social Care");
                });

            }).then(function () {
                driver.sleep(1500);
                return driver.wait(until.elementsLocated(page.warning_page.elements.warningPageHeading), 10000)
                    .then(function () {
                        return driver.findElement(page.warning_page.elements.warningPageHeading).getText();
                    });
            });
    },

    createNewWarning: function (warningTitle) {
        //console.log('in createNewWarning');
        return driver.wait(until.elementsLocated(page.warning_page.elements.createWarningIcon), 10000)
            .then(function () {
                return driver.findElement(page.warning_page.elements.createWarningIcon).click().then(function () {

                    driver.sleep(1500);
                    //console.log('in createWarningIcon click() waited 5sec');
                    return driver.wait(until.elementsLocated(page.warning_page.elements.newWarningSection), 10000)
                        .then(function () {
                            //driver.findElement(page.warning_page.elements.newWarningRedIcon).isDisplayed();
                            return helpers.clickIncludesList(page.warning_page.elements.warningSelectDropDown, 'button', by.css('li a'), warningTitle)
                                .then(function () {
                                    driver.findElement(page.warning_page.elements.warningComments).sendKeys('Warning Comments');
                                    driver.findElement(page.warning_page.elements.warningClientAw).click();
                                    return driver.findElement(page.warning_page.elements.newWarningDatePicker).sendKeys('13/01/2017')
                                        .then(function () {
                                            return driver.findElement(page.warning_page.elements.createWarningSubmit).click();
                                            // return driver.sleep(1000);
                                        });
                                });
                        });

                });
            });

    },


    verifyCreatedWarning: function (warningTitle) {

        return driver.wait(until.elementsLocated(page.warning_page.elements.createdWarningPanel), 10000).then(function () {
            helpers.gridGetText(page.warning_page.elements.createdWarningPanel, page.warning_page.elements.createdwarningTitle, warningTitle)
                .then(function (createdWarningTitle) {
                    // console.log('createdWarningTitle : ', createdWarningTitle);
                });
            return helpers.gridClick(page.warning_page.elements.createdWarningAccordion, page.warning_page.elements.createdwarningTitle, warningTitle)
                .then(function () {

                    // console.log('createdWarningTitle : Click()');
                    return driver.sleep(5000);
                });
        });
    },

    verifyWarningHoveredData: function (warningTitle, byUser, creationDate) {
        return driver.wait(until.elementLocated(page.warning_page.elements.warningIcon), 10000).then(function (warningIconElem) {
            if (driver.findElement(page.warning_page.elements.notificationPanelClose).isDisplayed()) {
                return driver.findElement(page.warning_page.elements.notificationPanelClose).click();
            }
        }).then(() => {
            return driver.wait(until.elementLocated(page.warning_page.elements.warningIcon), 10000, "warningIcon not located").then(function (warningIconElem) {
                return driver.wait(until.elementIsVisible(warningIconElem), 5000, "warningIconElem is not visible").then(() => {
                    return driver.actions().mouseMove(warningIconElem, { x: -50, y: 0 }).perform()
                });
            });
        }).then(function () {
            return driver.wait(until.elementsLocated(page.warning_page.elements.warningIconHoveredTexts), 5000, "Warning hovered data not shown")
                .then(options => {
                    return options[1].getText().then(text => {
                        expect(text).to.equal(warningTitle)
                    }).then(() => {
                        return options[2].getText().then(text => {
                            expect(text).to.equal(byUser)
                        })
                    }).then(() => {
                        return options[3].getText().then(text => {
                            expect(text).to.equal(creationDate)
                        })
                    });
                })
        });
    },

    verifyMissingPersonWarning: function (warningTitle, byUser, creationDate) {
        return driver.wait(until.elementLocated(page.warning_page.elements.warningBlock), 10000).then(function (warningBlockElem) {
            return driver.wait(until.elementIsVisible(warningBlockElem), 5000, "warningBlockElem is not visible").then(() => {
                return warningBlockElem.findElements(by.css('span'))
                    .then(options => {
                        return options[0].getText().then(text => {
                            expect(text).to.equal(warningTitle);
                        }).then(() => {
                            return options[1].getText().then(text => {
                                expect(text).to.contain(byUser);
                            });
                        }).then(() => {
                            return options[2].getText().then(text => {
                                expect(text).to.contain(creationDate);
                            });
                        });
                    });
            });
        });
    }
}