module.exports = {

    //  url: 'https://www.google.co.in/[a-zA-Z0-9\-_?=]+',

    elements: {

        consentIcon: by.css('span.icon-consent-banner'),
        consentIconForUnknown: by.css('span.icon-consent-banner.icon-consent-unknown'),

        consentPageTitle: 'Consent | One Social Care',
        consentPageHeading: by.css('h2[class="page-title"]'),

        consentSection: by.css('div.consent-facet .container-fluid .page-content'),

        createConsentIcon: by.css('div[class="hatrickIcons icon-create-new"]'),
        newConsentSection: by.css('div.consent-facet div.create-new-consent.event-form'), //need name tag

        newConsentHeading: by.css('h3.create-new-title.block'),

        consentTypeDd: by.css('.create-new-consent .dropdown button.form-fields'),
        consentTypeDdList: by.css('.create-new-consent .dropdown.open ul.consentType'),
        consentTypeDdListItem: by.css('li'),
        //---partial Consent ---Partial - share with everyone except
        consentExceptionListSearchInput: by.css('#exceptionListLbl .selectize-input.items.not-full input'),
        consentExceptionListSearchDdList: by.css('#exceptionListLbl div.selectize-dropdown.multi .selectize-dropdown-content'),

        consentExceptionListListItemsOrg: by.css('div[data-group="organisation"]'),
        consentExceptionListListItemsPerson: by.css('div[data-group="person"]'),
        consentExceptionListListItemsProf: by.css('div[data-group="professional"] div.option'),

        consentExceptionListListItemOption: by.css('div.option'),

        consentExceptionListOrgPill: by.css('#exceptionListLbl .selectize-input.has-options div.organisation-tag'),
        consentExceptionListPerPill: by.css('#exceptionListLbl .selectize-input.has-options div[class*="person-tag-"]'),
        consentExceptionListProfPill: by.css('#exceptionListLbl .selectize-input.has-options div.professional-tag'),

        consentExceptionListOrgBC: by.css('div[name="organisation-business-card"]'),
        consentExceptionListPerBC: by.css('div[name="person-business-card"]'),
        consentExceptionListProfBC: by.css('div[name="professional-business-card"]'),
        //---partial Consent ---Partial - share with no-one except

        consentGivenBySearchInput: by.css('.panel-group.consents [id="Comments"]'),//-----need unique name
        consentGivenBySearchDdList: by.css('.panel-group.consents [id="Comments"]'),
        consentBySearchListItems: by.css('.panel-group.consents [id="Comments"]'),
        consentBySearchPill: by.css('.panel-group.consents [id="Comments"]'),

        consentStartDateIcon: by.css('div[name="new-consent-start-date"] .input-group.datepicker-panel i'),
        consentStartDateLbl: by.css('div[name="new-consent-start-date"] label.control-label'),
        consentWithDrawlDateIcon: by.css('div[name="new-consent-withdrawal-date"] .input-group.datepicker-panel i'),
        consentWithDrawlLbl: by.css('div[name="new-consent-withdrawal-date"] label.control-label'),

        consentWithDrawlReason: by.css('textarea[name="new-consent-withdrawalReason"]'),//--------------
        consentDescription: by.css('textarea[name="new-consent-description"]'),///--------------needs name tag change 
        consentEvidenceLabel: by.css('.panel-group.consents [id="Comments"]'),///-----------------need name tag


        consentAttachments: by.css('.panel-group.consents button[class="btn btn-secondary dz-clickable"]'), //need name tag - unique

        createConsentSubmit: by.css('button[name="new-consent-create"]'),
        //----------verify consent ------------
        consentSectionMain: by.css('div.consent-facet .container-fluid'),
        consentBlockRow: by.css('div.consent-facet .container-fluid .consent-block.row'),
        consentBlockTitle: by.css('.consent-block-wrapper .consent-title strong'),
        consentBlockOrgPill: by.css('div[name="provision-list-name"] span.organisation-tag'),
        consentBlockPerPill: by.css('div[name="provision-list-name"] span[class*="person-tag-"]'),
        consentBlockProfPill: by.css('div[name="provision-list-name"] span.professional-tag'),
        consentBlockGivenByPill: by.css('div[name="provision-address"] span[class*="person-tag-"]'),
        consentBlockMore: by.css('a[name="provision-list-expander"]'),
        consentBlockReason: by.css('div[name="reason-for-provision"] .col-sm-12.m-b-sm'),
    },


    navigateConsent: function () {

        return driver.wait(until.elementsLocated(page.consents_page.elements.consentIcon), 10000)
            .then(function () {

                return driver.findElement(page.consents_page.elements.consentIcon).click();
            });
    },


    verifyConsentPage: function () {
        return driver.wait(until.elementsLocated(page.consents_page.elements.consentSection), 20000)
            .then(function () {
                driver.getTitle().then(function (pageTitle) {
                    expect(pageTitle).to.contain("Consent | One Social Care");
                });

            }).then(function () {
                driver.sleep(1500);
                return driver.wait(until.elementsLocated(page.consents_page.elements.consentPageHeading), 10000)
                    .then(function () {
                        return driver.findElement(page.consents_page.elements.consentPageHeading).getText()
                            .then(function (consentPageHeading) {
                                expect(consentPageHeading).to.contain("Consents");
                            });
                    });
            });
    },

    createNewConsent: function (forPerson) {
        //console.log('in createNewConsent');
        return driver.wait(until.elementsLocated(page.consents_page.elements.createConsentIcon), 10000).then(function () {
            return driver.findElement(page.consents_page.elements.createConsentIcon).click().then(function () {
                driver.sleep(1500);
                //console.log('in createConsentIcon');
                return driver.wait(until.elementsLocated(page.consents_page.elements.newConsentSection), 10000).then(function () {
                    driver.findElement(page.consents_page.elements.consentTypeDd).click();
                    //console.log('in consentTypeDd');
                    //return helpers.selectOption(page.consents_page.elements.consentSelectDropDown, warningTitle)
                    return helpers.gridClick(page.consents_page.elements.consentTypeDdList, page.consents_page.elements.consentTypeDdListItem, "Partial - share with everyone except")
                        .then(function () {
                            //console.log('in consentTypeDdListItem');
                            driver.sleep(500);
                            return driver.wait(until.elementsLocated(page.consents_page.elements.consentExceptionListSearchInput), 10000).then(function () {
                                config = jsonfile.readFileSync('./support/'+featureConfig);
                                //console.log('in consentExceptionListSearchInput');
                                orgName = config.Organisation.BasicInfo.NewName;
                                person1Name = config.PersonDetails.person1.Name;
                                professionalName = config.Professional.BasicInfo.NewName;
                                return driver.findElement(page.consents_page.elements.consentExceptionListSearchInput).sendKeys(orgName).then(function () {
                                    //console.log('in consentExceptionListSearchInput orgName');
                                    driver.sleep(1000);
                                    return driver.wait(until.elementsLocated(page.consents_page.elements.consentExceptionListSearchDdList), 10000).then(function () {
                                        driver.sleep(1000);
                                        //console.log('in consentExceptionListSearchDdList');
                                        driver.findElement(page.consents_page.elements.consentExceptionListSearchInput).sendKeys(selenium.Key.ENTER);
                                        driver.sleep(1000);
                                        //console.log('in consentExceptionListSearchInput');
                                        // driver.findElement(page.consents_page.elements.consentExceptionListOrgPill).isDisplayed();

                                        return driver.wait(until.elementsLocated(page.consents_page.elements.consentExceptionListOrgBC), 10000, 'Organisation Business card not visible').then(function () {
                                            return driver.findElement(page.consents_page.elements.consentExceptionListOrgBC).getText().then(function (OrgBCardText) {
                                                ////console.log('OrgBCardText :', OrgBCardText);
                                                expect(OrgBCardText).to.contain(orgName);
                                                // .then(function () {
                                                return driver.findElement(page.consents_page.elements.consentExceptionListSearchInput).sendKeys(person1Name).then(function () {
                                                    driver.sleep(1000);
                                                    return driver.wait(until.elementsLocated(page.consents_page.elements.consentExceptionListSearchDdList), 10000).then(function () {
                                                        driver.sleep(1000);
                                                        driver.findElement(page.consents_page.elements.consentExceptionListSearchInput).sendKeys(selenium.Key.ENTER);
                                                        driver.sleep(1000);
                                                        // driver.findElement(page.consents_page.elements.consentExceptionListPerPill).isDisplayed();
                                                        return driver.wait(until.elementsLocated(page.consents_page.elements.consentExceptionListPerBC), 10000, 'Person Business card not visible').then(function () {
                                                            driver.findElement(page.consents_page.elements.consentExceptionListPerBC).getText().then(function (PerBCardText) {
                                                                ////console.log('PerBCardText :', PerBCardText);
                                                                expect(PerBCardText).to.contain(person1Name);
                                                            });
                                                            // .then(function () {
                                                            ////console.log(7);
                                                            driver.findElement(page.consents_page.elements.consentExceptionListSearchInput).sendKeys(professionalName);
                                                            driver.sleep(1000);
                                                            return driver.wait(until.elementsLocated(page.consents_page.elements.consentExceptionListSearchDdList), 10000).then(function () {
                                                                driver.sleep(1000);
                                                                helpers.gridClick(page.consents_page.elements.consentExceptionListSearchDdList, page.consents_page.elements.consentExceptionListListItemsProf, professionalName);
                                                                //driver.findElement(page.consents_page.elements.consentExceptionListSearchInput).sendKeys(selenium.Key.ENTER);
                                                                driver.sleep(1000);
                                                                // driver.findElement(page.consents_page.elements.consentExceptionListProfPill).isDisplayed();
                                                                return driver.wait(until.elementsLocated(page.consents_page.elements.consentExceptionListProfBC), 10000, 'Professional Business card not visible').then(function () {
                                                                    return driver.findElement(page.consents_page.elements.consentExceptionListProfBC).getText().then(function (ProfBCardText) {
                                                                        ////console.log('ProfBCardText :', ProfBCardText);
                                                                        expect(ProfBCardText).to.contain(professionalName);
                                                                    });
                                                                    // .then(function () {                                                                });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                });
            });
        });
    },

    addConsentDate: function (forPerson) {
        return driver.executeScript('return window.scrollTo(' + 900 + ',' + 900 + ');').then(function () {
            //console.log(1);
            driver.sleep(800);
            return driver.findElement(page.consents_page.elements.consentStartDateIcon).click().then(function () {
                var date = new Date();
                var todayDate = date.getDate();
                return helpers.gridClickDate('curr', todayDate).then(function () {
                    // console.log(2);
                    return driver.findElement(page.consents_page.elements.consentStartDateLbl).click().then(function () {
                        // console.log(3);
                        return driver.findElement(page.consents_page.elements.consentWithDrawlDateIcon).click().then(function () {
                            //console.log(4);
                            var date2 = new Date();
                            date2.setDate(date2.getDate() + 2);
                            var nextDate = date2.getDate();
                            return helpers.gridClickDate('curr', nextDate).then(function () {
                                //console.log(5);
                                return driver.findElement(page.consents_page.elements.consentWithDrawlLbl).click()
                                    .then(function () {
                                        //console.log(6);
                                        return driver.wait(until.elementsLocated(page.consents_page.elements.consentWithDrawlReason), 10000)
                                            .then(function () {
                                                //console.log(7);
                                                return driver.findElement(page.consents_page.elements.consentWithDrawlReason).sendKeys('Reason for withdrawal for ' + forPerson)
                                                    .then(function () {
                                                        //console.log(8);                                                        
                                                        return driver.findElement(page.consents_page.elements.consentDescription).sendKeys('Consent Description for ' + forPerson).then(function () {
                                                            return driver.sleep(1000);
                                                            //     .then(function ()  // });
                                                        });
                                                    });
                                            });
                                    });
                            });
                        });
                    });
                });
            });
        });
    },

    submitConsent: function () {
        //console.log('in sumbit');
        return driver.wait(until.elementsLocated(page.consents_page.elements.createConsentSubmit), 10000, 'Submit button not available').then(function () {
            //console.log('in sumbit2');
            driver.findElement(page.consents_page.elements.createConsentSubmit).click();
            console.log('in sumbit3');
            return driver.sleep(3500);
        });
    },

    verifyCreatedConsent: function () {
        driver.sleep(3000);
        return driver.wait(until.elementsLocated(page.consents_page.elements.consentBlockRow), 10000, 'consentBlockRow not available').then(function () {
            config = jsonfile.readFileSync('./support/'+featureConfig);
            orgName = config.Organisation.BasicInfo.NewName;
            person1Name = config.PersonDetails.person1.Name;
            professionalName = config.Professional.BasicInfo.NewName;

            var consentText = 'Partial - share with everyone except';
            var consentSection = driver.findElement(page.consents_page.elements.consentSectionMain);
            return helpers.gridGetText(page.consents_page.elements.consentSectionMain, page.consents_page.elements.consentBlockTitle, consentText).then(function (retconsentText) {
                return expect(retconsentText).to.contain(consentText)
                ////console.log('retconsentText : ', retconsentText);
            }).then(function () {
                consentSection.findElement(page.consents_page.elements.consentBlockOrgPill).getText().then(function (orgText) {
                    expect(orgText).to.contain(orgName);
                });
                consentSection.findElement(page.consents_page.elements.consentBlockPerPill).getText().then(function (PerText) {
                    expect(PerText).to.contain(person1Name);
                });
                return consentSection.findElement(page.consents_page.elements.consentBlockProfPill).getText().then(function (profText) {
                    expect(profText).to.contain(professionalName);
                });
            }).then(function () {
                return consentSection.findElement(page.consents_page.elements.consentBlockMore).click();
            });
        });
    },

    hoverConsent: function () {
        return driver.findElement(page.consents_page.elements.consentIcon).then(function (consentIcon) {
            // ////console.log('in hover');
            driver.actions().mouseMove(consentIcon).perform();
            return driver.sleep(1500);
        });
    },

}