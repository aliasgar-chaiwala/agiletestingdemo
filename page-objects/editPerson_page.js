module.exports = {

    //  url: 'https://www.google.co.in/[a-zA-Z0-9\-_?=]+',

    elements: {

        contactNumberInput: by.css('.contact-component input'),
        contactTypeList: by.css('.dropdown-contact-type > ul'),
        contactTypeListItem: by.css('li > a.contact-type > span'),
        contactNumberSaveBtn: by.css('.btn-save-contacts'),
        niNumberInput: by.css('input[name="niNumber"]'),
        submitButton: by.css('button[aria-label="submit-info"]'),

        editPersonLink: by.css('a[aria-label="Edit profile"]'),
        primaryNeedLabel: by.css('label[for="primaryNeed"]'),
        primaryNeedDiv: by.css('div[name="addPersonPrimaryNeed"]'),
        editsubmitButton: by.css('button[aria-label="submit-info"]'),

        firstNameInput: by.css('input#basic-name'),
        alias: by.css('div[data-bind*="onSearchingForAlias"] input'),
        genderDropdown: by.css('div[name="editGender"]'),
    },

    updateContactNumber: function () {
        return driver.executeScript('return window.scrollTo(' + 1300 + ',' + 1300 + ');').then(function () {
            driver.sleep(1000);
            return driver.wait(until.elementLocated(page.editPerson_page.elements.contactNumberInput), 2000, "Contact number input is not located")
                .then(function () {
                    driver.findElement(page.editPerson_page.elements.contactNumberInput).click();
                    return driver.findElement(page.editPerson_page.elements.contactNumberInput).sendKeys("7463366565");
                })
                .then(function () {
                    driver.wait(until.elementsLocated(page.editPerson_page.elements.contactTypeList), 10000, 'Contact Address List Not present');
                    driver.sleep(1000);
                    return helpers.gridClick(page.editPerson_page.elements.contactTypeList, page.editPerson_page.elements.contactTypeListItem, "Mobile").then(function () {
                        driver.sleep(500);
                        return driver.findElement(page.editPerson_page.elements.contactNumberSaveBtn).click();
                    })
                })
                .then(function () {
                })
        });
    },

    clickSubmitOnEditPage: function () {
        return driver.wait(until.elementLocated(page.editPerson_page.elements.submitButton), 5000, "Submit button not shown on Edit page").then(function (submitBtn) {
            return helpers.scrollIntoView(submitBtn).then(function () {
                return submitBtn.click().then(function () {
                    return driver.wait(until.elementsLocated(page.personFacet_page.elements.educationWidget), 10000);
                });
            });
        })
    },

    updateDOB: function (date) {
        return driver.wait(until.elementLocated(by.css('#personDob i')), 10000).then(function () {
            return driver.findElement(by.css('#personDob i')).then(function (dobIcon) {
                return driver.wait(until.elementIsVisible(dobIcon), 10000, "DOB Icon not displayed.")
                    .then(function () {
                        driver.sleep(1000);
                        dobIcon.click();
                        driver.sleep(1000);
                    })
                    .then(function () {
                        return helpers.gridSelectDate(date);
                    })
            })
        })
    },

    verifyPresenceOfNINumberTextBox: function (age) {
        if (age > 15) {
            return driver.wait(until.elementLocated(page.editPerson_page.elements.niNumberInput), 10000).then(function () {
                return driver.wait(until.elementIsVisible(driver.findElement(page.editPerson_page.elements.niNumberInput)), 5000, "niNumber Input box not displayed").then(function (niNumberElement) {
                    return niNumberElement.isDisplayed().then(function (flag) {
                        expect(flag).to.be.true;
                        console.log("niNumber is shown");
                    })
                })
            })
        } else {
            return driver.sleep(2000).then(function () {
                return !(driver.findElement(page.editPerson_page.elements.niNumberInput).isDisplayed()).then(function () {
                    console.log("niNumber is not shown");
                });
            });
        }
    },

    editperson: function (editpersonfield) {
        return driver.findElement(page.editPerson_page.elements.editPersonLink).click().then(function () {
            if (editpersonfield === 'Primary Need') {
                return driver.wait(until.elementsLocated(page.editPerson_page.elements.primaryNeedLabel), 10000, 'Primary Need Label is not located').then(function () {
                    driver.sleep(3000);
                    return helpers.clickIncludesList(page.editPerson_page.elements.primaryNeedDiv, 'button', by.css('li a'), "Family in acute stress").then(function () {
                        driver.sleep(3000);
                        return driver.findElement(page.editPerson_page.elements.editsubmitButton).click();
                    });
                });
            }
            else if (editpersonfield === 'Alias') {
                var faker = require('faker');
                global.aliasName = faker.name.firstName();
                return driver.wait(until.elementsLocated(page.editPerson_page.elements.alias), 10000, 'Alias is not located').then(function () {
                    return driver.findElement(page.editPerson_page.elements.alias).sendKeys(aliasName).then(function () {
                        driver.sleep(2000);
                        return driver.findElement(page.editPerson_page.elements.alias).sendKeys(selenium.Key.ENTER).then(function () {
                            driver.findElement(page.editPerson_page.elements.editsubmitButton).click();
                            return driver.sleep(10000);
                        });
                    });
                });
            }

        });
    },


    updateFirstName: function (firstName) {
        return driver.wait(until.elementLocated(page.editPerson_page.elements.firstNameInput), 5000).then(function () {
            return driver.wait(until.elementIsVisible(driver.findElement(page.editPerson_page.elements.firstNameInput)), 5000, "firstName Input box not displayed").then(function (firstNameElement) {
                return firstNameElement.clear().then(function () {
                    driver.sleep(500);
                    return firstNameElement.sendKeys(firstName);
                });
            });
        });
    },

    updateGender: function (genderToSelect) {
        return driver.wait(until.elementLocated(page.editPerson_page.elements.genderDropdown), 10000, 'Gender dropdown is not located').then(function (genderDrop) {
            return helpers.clickIncludesList(page.editPerson_page.elements.genderDropdown, 'button', by.css('li a'), genderToSelect).then(function () {
                return driver.sleep(1000);
            });
        });
    }
}