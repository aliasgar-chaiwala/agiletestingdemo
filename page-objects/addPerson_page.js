module.exports = {

    //  url: 'https://www.google.co.in/[a-zA-Z0-9\-_?=]+',

    elements: {

        addPersonLabel: by.css('h1[class="page-title"]'),
        setFirstName: by.css('[name="firstNameTxt"]'),
        setMiddleName: by.css('[name="middleNameTxt"]'),
        setLastName: by.css('[name="lastNameTxt"]'),
        submit: by.css('#btn-submit'),
        newIcon: by.css('[class="nav-icon nav-icon-new"]'),
        addPerson: by.css('li[aria-label="Add a Person"] a'),
        setGender: by.css('div[name="addPersonGender"]'),
        setEthnicity: by.css('div[name="appPersonEthnicity"]'),
        setSubEthnicity: by.css('div[name="addPersonSubEthnicity"]'),
        setPrimaryNeed: by.css('div[name="addPersonPrimaryNeed"]'),
        addressHouseInPersonDetails: by.css('div[name="addressLine1"] input'),
        addressAreaInPersonDetails: by.css('div[name="addressLine2"] input'),
        addressTownInPersonDetails: by.css('#personTownCity'),
        addressCountryInPersonDetails: by.css('input[placeholder="County"]'),
        addressPostInPersonDetails: by.css('[id="personpostCode"]'),
        addressSearchButton: by.css('div[name="addressLine1"] button.icon-search'),
        addressSearchList: by.css('div[name="addressLine1"] ul.dropdown-menu'),
        addressSearchListItem: by.css('li a.m-r-xs'),
        addressSearchList1stItem: by.css('div[name="addressLine1"] ul.dropdown-menu li:nth-child(1) a.m-r-xs'),
        nhsNumberInput: by.css('input[name="NHSNumber"]'),
        inputPlaceWith: by.css('input[name="placementWith1"]'),
        setPrimarySupportReason: by.css('div[name="addPersonPrimarySupportReason"]'),
        setPrimarySupportSubReason: by.css('div[name="addPersonPrimarySupportReasonSubCategory"]'),
        //---------name="seekingAsylum-section"
        asylumSeekingSection: by.css('div[name="seekingAsylum-section"]'),
        asylumSeekingStateYes: by.css('div[name="seekingAsylum-section"] .btn-three-state.yes'),
        asylumSeekingStateNo: by.css('div[name="seekingAsylum-section"] .btn-three-state.no'),
        asylumSeekingStateNotSpec: by.css('div[name="seekingAsylum-section"] .btn-three-state.not-specified'),

        asylumSeekerBlock: by.css('div[name="seekingAsylum-section"] #asylumSeeker-block'),
        asylumSoughFrmLabel: by.css('div[name="soughtFrom"] label'),
        asylumSoughFrmDt: by.css('div[name="soughtFrom"] input'),
        asylumSoughToLabel: by.css('div[name="soughtTo"] label'),
        asylumSoughToDt: by.css('div[name="soughtTo"] input'),
        asylumCategoryDD: by.css('div[name="asylumCategory"] button.btn-dropdown.dropdown-toggle'),
        asylumCategoryDDList: by.css('div[name="asylumCategory"] ul.dropdown-menu'),
        asylumCategoryDDItem: by.css('li a'),
        nationality: by.css('[id="persondetails"] [placeholder="Search Nationality"]'),
        selectNationality: by.css('[id="persondetails"] [data-group="All nationalities"] span > span'),
        alias: by.css('div[data-bind*="onSearchingForAlias"] input'),
        addPersonArrow: by.css('button[id="action-caret"] span'),
        addAnotherHouseholdMember: by.css('li[name="addNewHousehold"] a'),
        addPersonCancelButton: by.css('button[name="cancelAddPerson"]'),
        addPersonHouseholdMess: by.css('div[name="householdAdded"] p'),
        addPersonCancelYesBtn: by.css('div.modal-footer button.btn-primary'),
        addPersonCancelNoBtn: by.css('div.modal-footer button.btnTransparent'),
        addPersonCancelBox: by.css('div.modal-content.messageBox')
    },

    /**
     * enters a search term into Google's search box and presses enter
     * @param {string} searchQuery
     * @returns {Promise} a promise to enter the search values
     */
    setPerson: function (personName, nhsNumber) {
        console.log("PersonName In Method: ", personName);
        return driver.wait(until.elementsLocated(page.addPerson_page.elements.addPersonLabel), 10000).then(function () {

            driver.findElement(page.addPerson_page.elements.addPersonLabel).click();
            driver.findElement(page.addPerson_page.elements.setFirstName).clear();

            driver.findElement(page.addPerson_page.elements.setFirstName).sendKeys(personName[0]);
            driver.findElement(page.addPerson_page.elements.setMiddleName).sendKeys(personName[1]);
            driver.findElement(page.addPerson_page.elements.setLastName).sendKeys(personName[2]);
            //                                                               
            //@RAJAT - PLEASE DONT  REMOVE BELOW 800 MS SLEEP, WE NEED THIS _/\_ Bug ID : 58395
            driver.sleep(800)
            return driver.findElement(page.addPerson_page.elements.addressHouseInPersonDetails).sendKeys(config.PersonDetails.Address.Full).then(function () {
                driver.sleep(1500);
                driver.findElement(page.addPerson_page.elements.addressHouseInPersonDetails).then(function (SearchButton) {
                    driver.actions().mouseMove(SearchButton).perform();
                });
                return driver.wait(until.elementsLocated(page.addPerson_page.elements.addressSearchButton), 10000).then(function () {
                    driver.findElement(page.addPerson_page.elements.addressSearchButton).click();
                    driver.sleep(1500);
                    driver.wait(until.elementsLocated(page.addPerson_page.elements.addressSearchList), 10000, 'Address List Not Visible');
                    driver.sleep(1000);
                    // driver.findElement(page.addPerson_page.elements.addressAreaInPersonDetails).sendKeys(config.PersonDetails.Address.Area);
                    // driver.findElement(page.addPerson_page.elements.addressTownInPersonDetails).sendKeys(config.PersonDetails.Address.Town);
                    // driver.findElement(page.addPerson_page.elements.addressCountryInPersonDetails).sendKeys(config.PersonDetails.Address.Country);
                    // return driver.findElement(page.addPerson_page.elements.addressPostInPersonDetails).sendKeys(config.PersonDetails.Address.Post)
                    // return driver.findElement(page.addPerson_page.elements.nhsNumberInput).sendKeys(config.PersonDetails.Address.Post)
                    return driver.wait(until.elementsLocated(page.addPerson_page.elements.addressSearchList1stItem), 10000).then(function () {
                        return helpers.gridClick(page.addPerson_page.elements.addressSearchList, page.addPerson_page.elements.addressSearchListItem, config.PersonDetails.Address.Full).then(function () {
                            //driver.wait(until.elementsLocated(page.addPerson_page.elements.addressSearchList1stItem), 10000);
                            //return driver.findElement(page.addPerson_page.elements.addressSearchList1stItem).click();
                            return driver.executeScript('return window.scrollTo(' + 400 + ',' + 400 + ');').then(function () {
                                helpers.clickIncludesList(page.addPerson_page.elements.setGender, 'button', by.css('li a'), 'Male');
                                return driver.wait(until.elementsLocated(page.addPerson_page.elements.setEthnicity), 10000).then(function () {
                                    helpers.clickIncludesList(page.addPerson_page.elements.setEthnicity, 'button', by.css('li a'), 'White');
                                    return driver.findElement(page.addPerson_page.elements.setEthnicity).click().then(function () {
                                        driver.findElement(page.addPerson_page.elements.nationality).sendKeys('Afghan')
                                        return driver.wait(until.elementsLocated(page.addPerson_page.elements.selectNationality), 10000).then(function () {
                                            driver.findElement(page.addPerson_page.elements.selectNationality).click();
                                            helpers.clickIncludesList(page.addPerson_page.elements.setSubEthnicity, 'button', by.css('li a'), 'White British');
                                            return helpers.clickIncludesList(page.addPerson_page.elements.setPrimaryNeed, 'button', by.css('li a'), 'Low income');
                                        })
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
        //});
    },

    setPersonPrimarySupport: function () {
        driver.executeScript('return window.scrollTo(' + 900 + ',' + 900 + ');')
        return driver.wait(until.elementsLocated(page.addPerson_page.elements.setPrimarySupportReason), 30000).then(function () {
            helpers.clickIncludesList(page.addPerson_page.elements.setPrimarySupportReason, 'button', by.css('li a'), 'Mental Health support');
            return driver.wait(until.elementsLocated(page.addPerson_page.elements.setPrimarySupportSubReason), 10000)
                .then(function () {
                    return helpers.clickIncludesList(page.addPerson_page.elements.setPrimarySupportSubReason, 'button', by.css('li a'), 'Mental Health support');
                });
        });
    },

    setSeekingAsylum: function (ASYLUMCATEORY) {

        return driver.wait(until.elementsLocated(page.addPerson_page.elements.asylumSeekingSection), 10000).then(function () {
            driver.findElement(page.addPerson_page.elements.asylumSeekingStateYes).isDisplayed();
            driver.findElement(page.addPerson_page.elements.asylumSeekingStateNo).isDisplayed();
            driver.findElement(page.addPerson_page.elements.asylumSeekingStateNotSpec).isDisplayed();

            driver.findElement(page.addPerson_page.elements.asylumSeekingStateYes).click();
            return driver.wait(until.elementsLocated(page.addPerson_page.elements.asylumSeekerBlock), 10000).then(function () {
                var dt = 23;
                driver.sleep(2000);
                driver.findElement(page.addPerson_page.elements.asylumSoughFrmDt).click();
                helpers.gridClickDate('cur', dt);
                driver.findElement(page.addPerson_page.elements.asylumSoughFrmLabel).click();

                driver.findElement(page.addPerson_page.elements.asylumSoughToDt).click();
                helpers.gridClickDate('cur', dt + 1);
                driver.findElement(page.addPerson_page.elements.asylumSoughToLabel).click();

                driver.findElement(page.addPerson_page.elements.asylumCategoryDD).click();
                return driver.wait(until.elementsLocated(page.addPerson_page.elements.asylumCategoryDDList), 10000).then(function () {
                    return helpers.clickIncludesGrid(page.addPerson_page.elements.asylumCategoryDDList, page.addPerson_page.elements.asylumCategoryDDItem, ASYLUMCATEORY);
                });
            });
        });
    },

    setPersonNhs: function (nhsNumber) {
        return driver.executeScript('return window.scrollTo(' + 50 + ',' + 50 + ');').then(function () {
            nhsNumber = nhsNumber.replace(" ", "").trim();
            nhsNumber = nhsNumber.replace(" ", "").trim();

            console.log('\nsetPersonNhs NHS-NUMBER : ', nhsNumber);

            return driver.findElement(page.addPerson_page.elements.nhsNumberInput).sendKeys(nhsNumber);
            //return driver.findElement(page.addPerson_page.elements.inputPlaceWith).click();
        });
    },

    submitPerson: function () {
        //console.log('before submit');
        //driver.sleep(500);
        driver.executeScript('return window.scrollTo(' + 1500 + ',' + 1500 + ');');
        return driver.wait(until.elementsLocated(page.addPerson_page.elements.submit), 10000).then(function () {
            // driver.findElement(by.css('#alertsection input.form-control')).click();
            //driver.sleep(500);
            driver.findElement(page.addPerson_page.elements.submit).click();
            driver.executeScript('return window.scrollTo(' + 400 + ',' + 400 + ');');
            return driver.sleep(2000);
        });
    },

    setPersonPcode: function (personName, nhsNumber, PostCode) {
        console.log("PersonName In Method: ", personName);
        return driver.wait(until.elementsLocated(page.addPerson_page.elements.addPersonLabel), 10000).then(function () {

            driver.findElement(page.addPerson_page.elements.addPersonLabel).click();
            driver.findElement(page.addPerson_page.elements.setFirstName).clear();

            driver.findElement(page.addPerson_page.elements.setFirstName).sendKeys(personName[0]);
            driver.findElement(page.addPerson_page.elements.setMiddleName).sendKeys(personName[1]);
            driver.findElement(page.addPerson_page.elements.setLastName).sendKeys(personName[2]);
            return driver.executeScript('return window.scrollTo(' + 400 + ',' + 400 + ');').then(function () {
                helpers.selectOption(page.addPerson_page.elements.setGender, 'Male');
                return driver.wait(until.elementsLocated(page.addPerson_page.elements.setEthnicity), 10000).then(function () {
                    helpers.selectOption(page.addPerson_page.elements.setEthnicity, 'White');
                    return driver.findElement(page.addPerson_page.elements.setEthnicity).click().then(function () {

                        helpers.selectOption(page.addPerson_page.elements.setSubEthnicity, 'White British');
                        helpers.selectOption(page.addPerson_page.elements.setPrimaryNeed, 'Low income');
                        driver.executeScript('return window.scrollTo(' + 50 + ',' + 50 + ');');
                        // return driver.findElement(page.addPerson_page.elements.addressHouseInPersonDetails).sendKeys(config.PersonDetails.Address.Full).then(function () {

                        //     driver.findElement(page.addPerson_page.elements.addressHouseInPersonDetails).then(function (SearchButton) {
                        //         driver.actions().mouseMove(SearchButton).perform();
                        //     });
                        //     return driver.wait(until.elementsLocated(page.addPerson_page.elements.addressSearchButton), 10000).then(function () {

                        //         driver.findElement(page.addPerson_page.elements.addressSearchButton).click();
                        //         driver.sleep(1000);
                        //         driver.wait(until.elementsLocated(page.addPerson_page.elements.addressSearchList), 10000);
                        //         driver.sleep(1000);
                        driver.findElement(page.addPerson_page.elements.addressAreaInPersonDetails).sendKeys(config.PersonDetails.Address.Area);
                        driver.findElement(page.addPerson_page.elements.addressTownInPersonDetails).sendKeys(config.PersonDetails.Address.Town);
                        driver.findElement(page.addPerson_page.elements.addressCountryInPersonDetails).sendKeys(config.PersonDetails.Address.Country);
                        return driver.findElement(page.addPerson_page.elements.addressPostInPersonDetails).sendKeys(PostCode)

                            // return driver.wait(until.elementsLocated(page.addPerson_page.elements.addressSearchList1stItem), 10000).then(function () {
                            //     return helpers.gridClick(page.addPerson_page.elements.addressSearchList, page.addPerson_page.elements.addressSearchListItem, config.PersonDetails.Address.Full)
                            //         //driver.wait(until.elementsLocated(page.addPerson_page.elements.addressSearchList1stItem), 10000);
                            //         //return driver.findElement(page.addPerson_page.elements.addressSearchList1stItem).click();
                            .then(function () {

                                nhsNumber = nhsNumber.replace(" ", "").trim();
                                nhsNumber = nhsNumber.replace(" ", "").trim();
                                console.log('\nNHS-NUMBER : ', nhsNumber);

                                //driver.findElement(page.addPerson_page.elements.nhsNumberInput).sendKeys(nhsNumber);
                                driver.findElement(page.addPerson_page.elements.inputPlaceWith).click();
                                //driver.sleep(3000);

                                driver.executeScript('return window.scrollTo(' + 1500 + ',' + 1500 + ');');
                                //console.log('before submit');
                                //driver.sleep(500);
                                return driver.wait(until.elementsLocated(page.addPerson_page.elements.submit), 10000).then(function () {
                                    driver.findElement(by.css('#alertsection input.form-control')).click();
                                    driver.findElement(page.addPerson_page.elements.submit).click();
                                    driver.executeScript('return window.scrollTo(' + 400 + ',' + 400 + ');');
                                    return driver.sleep(1200);
                                });
                            });
                    });
                });
            });
        });
    },
    setPersonwithoutPrimaryNeed: function (personName, nhsNumber) {
        console.log("PersonName In Method: ", personName);
        return driver.wait(until.elementsLocated(page.addPerson_page.elements.addPersonLabel), 10000).then(function () {

            driver.findElement(page.addPerson_page.elements.addPersonLabel).click();
            driver.findElement(page.addPerson_page.elements.setFirstName).clear();

            driver.findElement(page.addPerson_page.elements.setFirstName).sendKeys(personName[0]);
            driver.findElement(page.addPerson_page.elements.setMiddleName).sendKeys(personName[1]);
            driver.findElement(page.addPerson_page.elements.setLastName).sendKeys(personName[2]);
            //                                                               
            //@RAJAT - PLEASE DONT  REMOVE BELOW 800 MS SLEEP, WE NEED THIS _/\_ Bug ID : 58395
            driver.sleep(800)
            return driver.findElement(page.addPerson_page.elements.addressHouseInPersonDetails).sendKeys(config.PersonDetails.Address.Full).then(function () {
                driver.sleep(1500);
                driver.findElement(page.addPerson_page.elements.addressHouseInPersonDetails).then(function (SearchButton) {
                    driver.actions().mouseMove(SearchButton).perform();
                });
                return driver.wait(until.elementsLocated(page.addPerson_page.elements.addressSearchButton), 10000).then(function () {
                    driver.findElement(page.addPerson_page.elements.addressSearchButton).click();
                    driver.sleep(1500);
                    driver.wait(until.elementsLocated(page.addPerson_page.elements.addressSearchList), 10000, 'Address List Not Visible');
                    driver.sleep(1000);
                    // driver.findElement(page.addPerson_page.elements.addressAreaInPersonDetails).sendKeys(config.PersonDetails.Address.Area);
                    // driver.findElement(page.addPerson_page.elements.addressTownInPersonDetails).sendKeys(config.PersonDetails.Address.Town);
                    // driver.findElement(page.addPerson_page.elements.addressCountryInPersonDetails).sendKeys(config.PersonDetails.Address.Country);
                    // return driver.findElement(page.addPerson_page.elements.addressPostInPersonDetails).sendKeys(config.PersonDetails.Address.Post)
                    // return driver.findElement(page.addPerson_page.elements.nhsNumberInput).sendKeys(config.PersonDetails.Address.Post)
                    return driver.wait(until.elementsLocated(page.addPerson_page.elements.addressSearchList1stItem), 10000).then(function () {
                        return helpers.gridClick(page.addPerson_page.elements.addressSearchList, page.addPerson_page.elements.addressSearchListItem, config.PersonDetails.Address.Full).then(function () {
                            //driver.wait(until.elementsLocated(page.addPerson_page.elements.addressSearchList1stItem), 10000);
                            //return driver.findElement(page.addPerson_page.elements.addressSearchList1stItem).click();
                            return driver.executeScript('return window.scrollTo(' + 400 + ',' + 400 + ');').then(function () {
                                helpers.clickIncludesList(page.addPerson_page.elements.setGender, 'button', by.css('li a'), 'Male');
                                return driver.wait(until.elementsLocated(page.addPerson_page.elements.setEthnicity), 10000).then(function () {
                                    helpers.clickIncludesList(page.addPerson_page.elements.setEthnicity, 'button', by.css('li a'), 'White');
                                    return driver.findElement(page.addPerson_page.elements.setEthnicity).click().then(function () {
                                        driver.findElement(page.addPerson_page.elements.nationality).sendKeys('Afghan')
                                        return driver.wait(until.elementsLocated(page.addPerson_page.elements.selectNationality), 10000).then(function () {
                                            driver.findElement(page.addPerson_page.elements.selectNationality).click();
                                            return helpers.clickIncludesList(page.addPerson_page.elements.setSubEthnicity, 'button', by.css('li a'), 'White British');

                                        })
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
        //});
    },
    verifyAddedHouseholdMember: function () {
        return driver.wait(until.elementLocated(page.addPerson_page.elements.addPersonHouseholdMess), 50000).then(function () {
            return driver.findElement(page.addPerson_page.elements.addPersonHouseholdMess).getText().then(function (AddedhouseholdPerson) {
                expect(AddedhouseholdPerson).to.contain(AddedhouseholdPerson);

            });
        });

    },
    setPersonHouseHoldMember: function (personName, nhsNumber) {
        console.log("PersonName In Method: ", personName);
        return driver.wait(until.elementsLocated(page.addPerson_page.elements.setFirstName), 10000).then(function () {
            driver.findElement(page.addPerson_page.elements.setFirstName).clear();
            driver.findElement(page.addPerson_page.elements.setFirstName).sendKeys(personName[0]);
            driver.findElement(page.addPerson_page.elements.setMiddleName).sendKeys(personName[1]);
            driver.findElement(page.addPerson_page.elements.setLastName).sendKeys(personName[2]);

            //                                                               
            //@Snehal - PLEASE DONT  REMOVE BELOW 800 MS SLEEP, WE NEED THIS _/\_ Bug ID : 58395
            driver.sleep(800)
            return driver.findElement(page.addPerson_page.elements.addressHouseInPersonDetails).sendKeys(config.PersonDetails.Address.Full).then(function () {
                driver.sleep(1500);
                driver.findElement(page.addPerson_page.elements.addressHouseInPersonDetails).then(function (SearchButton) {
                    driver.actions().mouseMove(SearchButton).perform();
                });
                return driver.wait(until.elementsLocated(page.addPerson_page.elements.addressSearchButton), 10000).then(function () {
                    driver.findElement(page.addPerson_page.elements.addressSearchButton).click();
                    driver.sleep(1500);
                    driver.wait(until.elementsLocated(page.addPerson_page.elements.addressSearchList), 10000, 'Address List Not Visible');
                    driver.sleep(1000);
                    return driver.wait(until.elementsLocated(page.addPerson_page.elements.addressSearchList1stItem), 10000).then(function () {
                        return helpers.gridClick(page.addPerson_page.elements.addressSearchList, page.addPerson_page.elements.addressSearchListItem, config.PersonDetails.Address.Full).then(function () {
                            return driver.executeScript('return window.scrollTo(' + 400 + ',' + 400 + ');').then(function () {
                                helpers.clickIncludesList(page.addPerson_page.elements.setGender, 'button', by.css('li a'), 'Male');
                                return driver.wait(until.elementsLocated(page.addPerson_page.elements.setEthnicity), 20000).then(function () {
                                    helpers.clickIncludesList(page.addPerson_page.elements.setEthnicity, 'button', by.css('li a'), 'White');
                                    return driver.findElement(page.addPerson_page.elements.setEthnicity).click().then(function () {
                                        driver.findElement(page.addPerson_page.elements.nationality).sendKeys('Afghan')
                                        return driver.wait(until.elementsLocated(page.addPerson_page.elements.selectNationality), 10000).then(function () {
                                            driver.findElement(page.addPerson_page.elements.selectNationality).click();
                                            helpers.clickIncludesList(page.addPerson_page.elements.setSubEthnicity, 'button', by.css('li a'), 'White British');
                                            return helpers.clickIncludesList(page.addPerson_page.elements.setPrimaryNeed, 'button', by.css('li a'), 'Low income');
                                        })
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });

    },

    verifyFieldsHouseholdMember: function () {
        return driver.findElement(page.addPerson_page.elements.setFirstName).isEnabled().then(function (firstnamefield) {
            expect(firstnamefield).to.be.true;
            return driver.findElement(page.addPerson_page.elements.setMiddleName).isEnabled().then(function (middlenamefield) {
                expect(middlenamefield).to.be.true;
                driver.findElement(page.addPerson_page.elements.setLastName).isEnabled().then(function (lastnamefield) {
                    expect(lastnamefield).to.be.true;
                });
            });
        });
    },

    setSecondPersonHouseHoldMember: function (personName, nhsNumber) {
        console.log("PersonName In Method: ", personName);
        return driver.wait(until.elementsLocated(page.addPerson_page.elements.setFirstName), 50000).then(function () {
            return driver.findElement(page.addPerson_page.elements.setFirstName).sendKeys(personName[0], 30000).then(function () {
                driver.findElement(page.addPerson_page.elements.setMiddleName).sendKeys(personName[1]);
                driver.findElement(page.addPerson_page.elements.setLastName).sendKeys(personName[2]);
            });
        });

    },

    cancelAddedHouseHoldMember: function () {
        return driver.wait(until.elementIsVisible(driver.findElement(page.addPerson_page.elements.addPersonCancelButton), 5000)).then(function () {
            return driver.findElement(page.addPerson_page.elements.addPersonCancelButton).click().then(function () {
                return driver.wait(until.elementLocated(page.addPerson_page.elements.addPersonCancelBox), 30000).then(function () {
                    return driver.wait(until.elementIsVisible(driver.findElement(page.addPerson_page.elements.addPersonCancelBox), 5000)).then(function () {
                        return driver.wait(until.elementLocated(page.addPerson_page.elements.addPersonCancelYesBtn), 5000).then(function () {
                            return driver.wait(until.elementIsVisible(driver.findElement(page.addPerson_page.elements.addPersonCancelYesBtn), 5000)).then(function () {
                                return driver.findElement(page.addPerson_page.elements.addPersonCancelYesBtn, 5000).click();
                            });
                        });
                    });
                });
            });
        });
    }
}


