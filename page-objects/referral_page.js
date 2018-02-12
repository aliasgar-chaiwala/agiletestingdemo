module.exports = {

    //  url: 'https://www.google.co.in/[a-zA-Z0-9\-_?=]+',

    elements: {
        sourceLabel: by.css('#maincontent div.panel-collapse.in.collapse div:nth-child(2) div:nth-child(4) > div > div > label'),
        primarySupportReason: by.css('[data-view*="otherSubjectDetails"] .row:nth-child(6) > div:nth-child(1) label'),
        primarySupportSubReason: by.css('[data-view*="otherSubjectDetails"] .row:nth-child(6) > div:nth-child(2) label'),
        autorizationDateIcon: by.css('.authorizationdate i'),
        setContractorToggle: by.css('div[name="Contactor details"] div.col-sm-1 a[data-bind*="showAccordion"]'),
        contactMethodDiv: by.css('#ContactorContactMethod'),
        contactAboutDiv: by.css('#ContactorContactAbout'),
        dateAndTimeofEvent: by.css('div[aria-label="Date and time of the event"] button'),
        contactorName: by.css('label[for="ContactorName"]'),
        primaryNeedDiv: by.css('div[data-bind*="primaryNeedDetails"]'),
        commonList: by.css('li a'),
        primaryNeedNotificationDiv: by.css('#primaryNeedDetailsSection div[data-bind*="visible: showNotificationFlag"]'),
        primaryNeedNotificationText: by.css('#primaryNeedDetailsSection div[data-bind*="visible: showNotificationFlag"] h4'),
        compareChangesLink: by.css('button[data-bind*="showCompareNeedModal"]'),
        yourversionpersonName: by.css('.table.table-bordered.compareTable tr:nth-child(1) td:nth-child(2)'),
        latestversionpersonName: by.css('.table.table-bordered.compareTable tr:nth-child(1) td:nth-child(3)'),
        thisisforlabel: by.css('table.table-bordered.compareTable tr:nth-child(3) td:nth-child(1)'),
        yourversionPrimaryNeed: by.css('table.table-bordered.compareTable tr:nth-child(3) td:nth-child(2)'),
        latestversionPrimaryNeed: by.css('table.table-bordered.compareTable tr:nth-child(3) td:nth-child(3)'),
        takeLatestButton: by.css('button[data-bind*="takeLatestFromCore"]'),
        primaryNeedButton: by.css('div[data-validation-property-key*="primaryNeed"] button'),
        TakeLatestsuccessMessage: by.css('div[data-bind*="visible:  !showNotificationFlag && isAllChangesAccpetedNotification && !isChangesAcceptedForUpdateCombination"] h4'),
        keepMyChangesButton: by.css('button[data-bind*="notificationAcknowledged"]'),
        keepMyChangesSuccessMessage: by.css('div[data-bind*="showSuccessMessage"] h4'),
        primaryNeedNotificationDiv: by.css('#primaryNeedDetailsSection div div[data-bind*="howNotificationFlag"]:nth-child(2)'),
        sourceofReferralDiv: by.css('div[data-validation-property-key*="sourceOfReferral"]'),
        informationMismatchNotification: by.css('.modal-content'),
        primaryNeedButton: by.css('div[data-bind*="primaryNeedDetails"] button'),
        ReferralDetailstextArea: by.css('span[class="form-subheadings m-b-sm block"] + div textarea'),
        toggleReferral: by.css('[aria-label="Accordion expander"] a.accordion-toggle')
    },

    verifySourceOfReferral: function () {
        driver.executeScript('return window.scrollTo(' + 700 + ',' + 700 + ');');
        return driver.wait(until.elementsLocated(page.referral_page.elements.sourceLabel), 10000)
            .then(function () {
                return driver.findElement(page.referral_page.elements.sourceLabel).getText()
                    .then(function (source) {
                        expect(source).to.equal('Source of referral');
                        return driver.findElement(page.referral_page.elements.primarySupportReason).getText()
                            .then(function (reason) {
                                console.log("reason: ", reason)
                                expect(reason).to.equal('Primary support reason');
                                return driver.findElement(page.referral_page.elements.primarySupportSubReason).getText()
                                    .then(function (subReason) {
                                        console.log("subReason: ", subReason)
                                        expect(subReason).to.equal('Primary support reason subcategory')
                                        return driver.sleep(100);
                                    });
                            })
                    });
            })
    },

    setFormAuthorizationOrRejectionDate: function () {
        return driver.wait(until.elementsLocated(page.referral_page.elements.autorizationDateIcon), 2000, "Authorisation/Rejection Date is not located")
            .then(function () {
                return driver.findElement(page.referral_page.elements.autorizationDateIcon).click()
            })
    },
    setContractor: function () {
        // return driver.wait(until.elementsLocated(page.referral_page.elements.setContractorToggle), 20000, "Set Contractor Accordion is not located")
        // .then(function () {
        return driver.sleep(5000).then(function () {
            // return driver.executeScript('return window.scrollTo(' + 500 + ',' + 500 + ');').then(function () {
            // driver.findElement(page.referral_page.elements.setContractorToggle).click();//.then(function(){
            return helpers.clickIncludesList(page.referral_page.elements.contactMethodDiv, 'button', page.referral_page.elements.commonList, "Phone").then(function () {
                return helpers.clickIncludesList(page.referral_page.elements.contactAboutDiv, 'button', page.referral_page.elements.commonList, "Enquiry").then(function () {
                    return driver.findElement(page.referral_page.elements.dateAndTimeofEvent).click().then(function () {
                        return helpers.gridClickDate('prev', '10').then(function () {
                            return driver.findElement(page.referral_page.elements.contactorName).click().then(function () {
                                helpers.clickIncludesList(page.referral_page.elements.sourceofReferralDiv, 'button', page.referral_page.elements.commonList, "‘SCHOOLS’")
                                return helpers.clickIncludesList(page.referral_page.elements.primaryNeedDiv, 'button', page.referral_page.elements.commonList, "Low income").then(function () {
                                    return driver.sleep(5000);
                                });
                            });
                        });
                    });
                });
            });
        });
        // });
        // });
        //});

    },
    expandContactorDetails: function () {
        return driver.wait(until.elementsLocated(page.referral_page.elements.setContractorToggle), 40000, "Set Contractor Accordion is not located")
            .then(function () {
                return driver.sleep(5000).then(function () {
                    return driver.executeScript('return window.scrollTo(' + 500 + ',' + 500 + ');').then(function () {
                        driver.findElement(page.referral_page.elements.setContractorToggle).click();
                    });
                });
            });//.then(function(){
    },
    primaryNeedUpdatedNotification: function () {
        return driver.executeScript('return window.scrollTo(' + 700 + ',' + 700 + ');').then(function () {
            return driver.sleep(5000).then(function () {
                return driver.findElement(page.referral_page.elements.primaryNeedNotificationText).getText().then(function (Text) {
                    expect(Text).to.equal("Primary need details have been updated.");
                    return driver.sleep(1000);
                });
            });
        });
    },
    clickCompareChanges: function () {
        return driver.wait(until.elementsLocated(page.referral_page.elements.compareChangesLink), 20000, "Compare Changes Button is not located").then(function () {
            return driver.findElement(page.referral_page.elements.compareChangesLink).click();
        });
    },
    verifyCompareChangesWindow: function () {
        return driver.wait(until.elementsLocated(page.referral_page.elements.yourversionpersonName), 20000, "Name is not located under Your Version").then(function () {
            return driver.findElement(page.referral_page.elements.yourversionpersonName).getText().then(function (nameYourVersion) {
                expect(nameYourVersion).to.equal(config.PersonDetails.Name);
                return driver.findElement(page.referral_page.elements.latestversionpersonName).getText().then(function (nameLatestVersion) {
                    expect(nameLatestVersion).to.equal(config.PersonDetails.Name);
                    return driver.findElement(page.referral_page.elements.yourversionPrimaryNeed).getText().then(function (yourversionPrimaryNeedText) {
                        expect(yourversionPrimaryNeedText).to.equal('Low income');
                        return driver.findElement(page.referral_page.elements.latestversionPrimaryNeed).getText().then(function (latestversionPrimaryNeedText) {
                            expect(latestversionPrimaryNeedText).to.equal('Family in acute stress');
                            return driver.sleep(1000);
                        });
                    });
                });
            });
        });

    },
    takeLatest: function () {
        return driver.wait(until.elementsLocated(page.referral_page.elements.takeLatestButton), 20000, "Take Latest Version is not Located").then(function () {
            return driver.findElement(page.referral_page.elements.takeLatestButton).click().then(function () {
                return driver.findElement(page.referral_page.elements.primaryNeedButton).getText().then(function (text) {
                    expect(text).to.equal('Family in acute stress');
                    return driver.findElement(page.referral_page.elements.TakeLatestsuccessMessage).getText().then(function (actualsuccessmessage) {
                        expect(actualsuccessmessage).to.equal('Successfully updated with the latest version.');
                        return driver.sleep(100);
                    });
                });
            });
        });
    },
    keepMyChanges: function () {
        return driver.wait(until.elementsLocated(page.referral_page.elements.keepMyChangesButton), 20000, "Keep My Changes Button is not Located").then(function () {
            return driver.findElement(page.referral_page.elements.keepMyChangesButton).click().then(function () {
                return driver.findElement(page.referral_page.elements.primaryNeedButton).getText().then(function (text) {
                    expect(text).to.equal('Low income');
                    return driver.findElement(page.referral_page.elements.keepMyChangesSuccessMessage).getText().then(function (actualsuccessmessage) {
                        expect(actualsuccessmessage).to.equal('You have kept your information as latest version.');
                        return driver.sleep(100);
                    });
                });
            });
        });

    },
    noPrimaryNeedNotification: function () {
        return driver.findElement(page.referral_page.elements.primaryNeedNotificationDiv).getAttribute("style").then(function (style) {
            return expect(style).to.equal('display: none;')
        });
    },
    informationMismatchNotification: function () {
        return driver.wait(until.elementsLocated(page.referral_page.elements.informationMismatchNotification), 20000, "Keep My Changes Button is not Located").then(function () {
            return driver.findElement(page.referral_page.elements.informationMismatchNotification).isDisplayed().then(function (isDisplayed) {
                return expect(isDisplayed).to.be.true;
            });
        });
    },
    verifyPrimaryNeed: function () {
        return driver.wait(until.elementsLocated(page.referral_page.elements.contactAboutDiv), 2000, "Contact is about is not present").then(function () {
            return helpers.clickIncludesList(page.referral_page.elements.contactAboutDiv, 'button', page.referral_page.elements.commonList, "Enquiry").then(function () {
                return driver.findElement(page.referral_page.elements.primaryNeedButton).getText().then(function (buttontext) {
                    expectedButtontext = 'Please choose...';
                    console.log(buttontext);
                    return expect(buttontext).to.equal(expectedButtontext)
                });
            });
        });
    },
    clickKeepMyChanges: function () {
        return driver.wait(until.elementsLocated(page.referral_page.elements.keepMyChangesButton), 20000, "Keep My Changes Button is not Located").then(function () {
            return driver.findElement(page.referral_page.elements.keepMyChangesButton).click().then(function () {
                return driver.findElement(page.referral_page.elements.primaryNeedButton).getText().then(function (text) {
                    expect(text).to.equal('Please choose...');
                });
            });
        });
    },
    setContractorWithoutPrimaryNeed: function () {
        return driver.sleep(5000).then(function () {
            // return driver.executeScript('return window.scrollTo(' + 500 + ',' + 500 + ');').then(function () {
            // driver.findElement(page.referral_page.elements.setContractorToggle).click();//.then(function(){
            return helpers.clickIncludesList(page.referral_page.elements.contactMethodDiv, 'button', page.referral_page.elements.commonList, "Phone").then(function () {
                return helpers.clickIncludesList(page.referral_page.elements.contactAboutDiv, 'button', page.referral_page.elements.commonList, "Enquiry").then(function () {
                    return driver.findElement(page.referral_page.elements.dateAndTimeofEvent).click().then(function () {
                        return helpers.gridClickDate('prev', '10').then(function () {
                            return driver.findElement(page.referral_page.elements.contactorName).click().then(function () {
                                helpers.clickIncludesList(page.referral_page.elements.sourceofReferralDiv, 'button', page.referral_page.elements.commonList, "‘SCHOOLS’")
                                return driver.sleep(5000);
                            });
                        });
                    });
                });
            });
        });
    },
    toggleReferralDetails: function () {
       // driver.findElements(page.referral_page.elements.toggleReferral).click();
        //then(function (element) {
            //element[2].click()
            return driver.wait(until.elementsLocated(page.referral_page.elements.ReferralDetailstextArea), 10000);
               // })
        
    },

    setReferral: function () {
        driver.sleep(1500);
        driver.findElements(page.referral_page.elements.ReferralDetailstextArea).then(function (element) {
            element[0].sendKeys("Summary");
        });
    }
}