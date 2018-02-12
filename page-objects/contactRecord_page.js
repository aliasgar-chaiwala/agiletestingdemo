var dateFormat = require('dateformat');
module.exports = {

    //  url: 'https://www.google.co.in/[a-zA-Z0-9\-_?=]+',

    elements: {
        subjectInPill: by.css('.col-sm-11 div.col-sm-11 .selectize-input.items.not-full.has-options.has-items > span'),
        subjectSearch: by.css('.col-sm-11 > div > div .col-sm-11 > div > div .selectize-input.items.not-full > input[type="text"]'),
        selectFromSearchList: by.css('#maincontent div.event-form div.row > div:nth-child(1) div.panel-heading > div > div.col-sm-11  div.selectize-dropdown.multi.form-control.plugin-remove_button > div > div.option'),
        toggleContactor: by.css('[name="Contactor details"] a.accordion-toggle'),
        contactMethods: by.css('div[name="ContactorContactMethod"]'),
        contactAbout: by.css('div[name="ContactorContactAbout"]'),
        eventTimeDateField: by.css('[aria-label="Date and time of the event"] i'),
        dateTimeEventReported: by.css('[aria-label="Date and time of event reported"] i'),
        allegedAbuseCategorydropDown: by.css('#abuseCategory'),
        abuseCategoryPhysical: by.css('form > div:nth-child(3) > div:nth-child(1) ul > li:nth-child(1) > span > a > span.pointer > span:nth-child(2)'),
        abuseCategorySexual: by.css('form > div:nth-child(3) > div:nth-child(1) ul > li:nth-child(2) > span > a > span.pointer > span:nth-child(2)'),
        abuseCategoryEmotional: by.css('form > div:nth-child(3) > div:nth-child(1) ul > li:nth-child(3) > span > a > span.pointer > span:nth-child(2)'),
        abusePlace: by.css('[data-view*="allegedabuse"] #abusePlace'),
        setAbusePlace: by.css('[data-view*="allegedabuse"] div:nth-child(3) > div:nth-child(2) ul li:nth-child(1) a'),
        nextStepToggleButton: by.css('[data-view*="actionBar"] .row .col-sm-1 a'),
        addNextStep: by.css('#btnForStepOrAction button'),
        nextStepsList: by.css('.btn.btn-dropdown.dropdown-toggle.form-group'),
        chooseTeam: by.css('[data-view*="nextSteps"] [id="nextstep/action"]:nth-child(1) input'),
        setTeam: by.css('[data-view*="nextSteps"] [id="nextstep/action"]:nth-child(1) .selectize-dropdown-content > div:nth-child(1)'),
        choosePriority: by.css('#dropdownMenu1 > strong'),
        setPriority: by.css('li div .col-sm-9 li:nth-child(1) a'),
        secondAddNextStage: by.css('[data-bind*="on.click:addNewStep"]'),
        secondNextStepsList: by.css('[data-view*="nextSteps"] [id="nextstep/action"]:nth-child(2) .m-l-md button'),
        secondNextStage: by.css('[data-view*="nextSteps"] [id="nextstep/action"]:nth-child(2) .m-b-sm button'),
        removeSecondPerson: by.css('[data-view*="nextSteps"] [id="nextstep/action"]:nth-child(2) .m-b-sm ul li:nth-child(2) a span:nth-child(1)'),
        chooseSecondTeam: by.css('[data-view*="nextSteps"] [id="nextstep/action"]:nth-child(2) input'),
        selectTeam: by.css('.selectize-dropdown.multi.form-fields.plugin-remove_button > div.selectize-dropdown-content > div:nth-child(1)'),
        //----------
        nextStep2selectTeamList: by.css('.nextStep-more li.list-group-item:nth-child(2) div.col-sm-3:nth-child(2) .nextstep-search .selectize-dropdown-content'),
        nextStep2selectTeamListItem: by.css('div.option'),

        nextStep3selectTeamList: by.css('.nextStep-more li.list-group-item:nth-child(3) div.col-sm-3:nth-child(2) .nextstep-search .selectize-dropdown-content'),
        nextStep3selectTeamListItem: by.css('div.option'),
        //-----------
        prioritySecondList: by.css('[id*="next-steps"] > div:nth-child(2) .nextStep-more > li:nth-child(2) #dropdownMenu1 > strong'),
        selectSecondPriority: by.css('[id*="next-steps"] > div:nth-child(2) .nextStep-more > li:nth-child(2) [aria-labelledby="dropdownMenu1"] > li:nth-child(1) a'),
        thirdNextStepsList: by.css('[data-view*="nextSteps"] [id="nextstep/action"]:nth-child(3) .m-l-md button'),
        chooseThirdTeam: by.css('[data-view*="nextSteps"] [id="nextstep/action"]:nth-child(3) input'),
        removeFirstPerson: by.css('ul > li:nth-child(3) > div > div:nth-child(2) > div:nth-child(1) .col-sm-10 .selectize-input.items.not-full.has-options.has-items > span:nth-child(1) > a'),
        priorityThirdList: by.css('[id*="next-steps"] > div:nth-child(2) .nextStep-more > li:nth-child(3) #dropdownMenu1 > strong'),
        selectThirdPriority: by.css('[id*="next-steps"] > div:nth-child(2) .nextStep-more > li:nth-child(3) [aria-labelledby="dropdownMenu1"] > li:nth-child(1) a'),
        contactVersions: by.css('#dropdownMenuMyInbox'),
        contactRecordFirstVersion: by.css('.header-block > div.row > div:nth-child(2) > div > ul > li:nth-child(1)'),
        contactRecordSecondVersion: by.css('.header-block > div.row > div:nth-child(2) > div > ul > li:nth-child(2)'),
        subjectToggle: by.css('.subject-panel.panel-sub-panel > div > div > div > div > div > div:nth-child(2) > div > a'),
        subjectInternalToggle: by.css('.app-info-block-section > div > div > div > div > div > .panel-heading > div > .col-sm-1 > div > a'),
        addressHouseInPersonDetails: by.css('[name="address.line1"]'),
        addressAreaInPersonDetails: by.css('[name="address.line2"]'),
        addressTownInPersonDetails: by.css('[name="address.line3"]'),
        addressCountryInPersonDetails: by.css('[name="address.townCity"]'),
        addressPostInPersonDetails: by.css('[name="address.postCode"]'),
        //-------------------NextStep-----
        nextStepListUl: by.css('#nextStepPanel ul.dropdown-menu.dropdown-item-xsmall'),
        nextStepListUlItem: by.css('li'),
        contactorName: by.css('div#ContactorName input'),
        selectContactorName: by.css('#ContactorName > div > div.selectize-dropdown.multi.form-control.plugin-remove_button > div > div.option'),
        selectContactorNameSearchRes: by.css('div#ContactorName .selectize-dropdown-content .option'),
        selectContactorNameList: by.css('div#ContactorName .selectize-dropdown-content'),
        ContactorPill: by.css('div#ContactorName .selectize-input.items span[class*="person-tag"]'),

        sourceOfReferrallabel: by.css('[data-view*="sourceOfReferral"] div.new-validation .form-group > label'),
        sourceOfReferral: by.css('div[data-bind*="sourceOfReferral"]'),
        sourceOfReferralOne: by.css('[data-view*="sourceOfReferral"]  div[class="row"]:nth-of-type(5) div[data-bind*="sourceOfReferral"]'),
        primarySupportReasonClick: by.css('[data-view*="sourceOfReferral"] > div > div:nth-child(6) [id="abusePlace"]'),
        primarySupportReasonSelect: by.css('[data-view*="sourceOfReferral"] > div > div:nth-child(6) ul li:nth-child(1) a'),
        primarySupportSubReasonClick: by.css('[data-view*="sourceOfReferral"] > div > div:nth-child(6) > div:nth-child(2)  [id="abusePlace"]'),
        primarySupportSubReasonSelect: by.css('[data-view*="sourceOfReferral"] > div > div:nth-child(6) > div:nth-child(2) ul li:nth-child(1) a'),
        missingFlag: by.css('div.case-flag.text-center.inline span'),
        contactorLabel: by.css('[data-view*="contactor/contactor"] div.form-group strong'),
        nameLabel: by.css('[for="ContactorName"]'),
        contactMethodLabel: by.css('[for="ContactMethod"]'),
        contactAboutLabel: by.css('[for="plan-overview"]'),
        timeOfEventLabel: by.css('#maincontent div.panel-collapse.in.collapse  div:nth-child(1) div:nth-child(4) > div:nth-child(2) label'),
        eventReportedLabel: by.css('[for="dropdownMenu1"]'),
        eventLocationLabel: by.css('#maincontent div.panel-collapse.in.collapse  div:nth-child(1)  div:nth-child(6) label'),
        contactorProfessionalLabel: by.css('#maincontent div.panel-collapse.in.collapse div:nth-child(1) div:nth-child(7) > div > div > label'),
        reasonLabel: by.css('[for="Reason"]'),
        contactFamilyLabel: by.css('#maincontent div.panel-collapse.in.collapse div:nth-child(1) div:nth-child(10) > div > div > label'),
        riskLabel: by.css('#maincontent div.panel-collapse.in.collapse div:nth-child(1) div:nth-child(12) > div > div > label'),
        otherSubjectLabel: by.css('[data-view*="otherSubjectDetails/otherSubjectDetails"] span:nth-child(1) strong'),
        sourceLabel: by.css('#maincontent div.panel-collapse.in.collapse div:nth-child(2) div:nth-child(4) > div > div > label'),
        toggleRecommendation: by.css('[name="Recommendations"] a.accordion-toggle'),
        recommendationDetails: by.css('[for="Action Taken"]'),
        recommendationName: by.css('#reusable-action-taken .dropdown span.align-middle'),
        missingType: by.css('div[data-bind*="propertyKey: \'missingType\'"]'),
        missingCircumstancesTextArea: by.css('div[data-bind*="value: \'missingCircumstances\'"] textarea'),
        visitationTextArea: by.css('div[data-bind*="value: \'visitation\'"] textarea'),
        healthIssuesTextArea: by.css('div[data-bind*="value: \'healthIssues\'"] textarea'),

        privatefosteringStart: by.css('[aria-label*="Private fostering start date"] i'),
        privFosterPlannedDuration: by.css('[data-view*="privateFostering"] .dropdown button'),
        privFosterPlannedDurationList: by.css('[data-view*="privateFostering"] .dropdown.open .dropdown-menu'),
        privFosterCarerInput: by.css('[data-view*="privateFostering"] #ContactorName input'),
        privFosterCarerList: by.css('[data-view*="privateFostering"] #ContactorName .selectize-dropdown-content'),
        privFosterCarerBCard: by.css('[data-view*="privateFostering"] [name="person-business-card"]'),
        privFosterReason: by.css('[data-view*="privateFostering"] textarea'),
        selectprivFosterCarerInput: by.css('[data-view*="privateFostering"] div.optgroup > div.option'),

        contactMethodButton: by.css('div[name="ContactorContactMethod"] button'),
        contactMethodList: by.css('div[name="ContactorContactMethod"] ul'),
        contactAboutButton: by.css('div[name="ContactorContactAbout"] button'),
        contactAboutButtonList: by.css('div[name="ContactorContactAbout"] ul'),
        addNewPerson: by.css('div.create-person span:nth-child(2)'),
        firstName: by.css('input[placeholder="First name"]'),
        middleName: by.css('input[placeholder="Middle name"]'),
        lastName: by.css('input[placeholder="Last name"]'),
        dob: by.css('#dp1 input'),
        createPersonButton: by.css('input[value="Create"]'),
        validationDiv: by.css('#validation'),
        togglePersonBanner: by.css('[aria-label="Accordion expander"] a.accordion-toggle'),
        subjectPersonform: by.css('[data-bind*="text:person.name"]'),
        togglePersonBanner: by.css('[aria-label="Accordion expander"] a.accordion-toggle'),
        subjectPersonform: by.css('[data-bind*="text:person.name"]'),
        reasonTextArea: by.css('textarea[placeholder="Please provide reasons for this contact"]'),
        ContactorDetailsAccordian: by.css('#maincontent > div > div > div > div.event-form > div > div > div.row > div:nth-child(2) > div > div > div > div > div > div.panel-heading > div > div.col-sm-1 > div > a'),
        abuseStatusDiv: by.css('label[for="abuseCategory"] + div > div.dropdown'),
        abuseStatusEmotionalAbuse: by.css('[data-bind*="allegedAbuseCatList"] tr:nth-child(1) td:nth-child(1) div.white-check input'),
        abuseStatusFinancialAbuse: by.css('[data-bind*="allegedAbuseCatList"] tr:nth-child(2) td:nth-child(1) div.white-check input'),
        abuseStatusNeglect: by.css('[data-bind*="allegedAbuseCatList"] tr:nth-child(3) td:nth-child(1) div.white-check input'),
        abuseStatusPhysicalAbuse: by.css('[data-bind*="allegedAbuseCatList"] tr:nth-child(4) td:nth-child(1) div.white-check input'),
        abuseStatusSexualAbuse: by.css('[data-bind*="allegedAbuseCatList"] tr:nth-child(5) td:nth-child(1) div.white-check input')



    },

    subjectPillVisible: function (person) {
        return driver.wait(until.elementsLocated(page.contactRecord_page.elements.subjectInPill), 15000)
            .then(function () {
                return driver.findElement(page.contactRecord_page.elements.subjectInPill).getText()
                    .then(function (pillName) {
                        var newStr = pillName.substring(0, pillName.length - 1);
                        var someText = newStr.replace(/(\r\n|\n|\r)/gm, "");
                        expect(someText).to.equal(person);
                    })
            })
    },

    searchSelectPerson1Subject: function (person1) {
        return driver.wait(until.elementsLocated(page.contactRecord_page.elements.subjectSearch), 10000)
            .then(function () {
                return driver.findElement(page.contactRecord_page.elements.subjectSearch).sendKeys(person1)
                    .then(function () {
                        //  console.log('in function', person1);
                        //driver.sleep(5000);
                        return driver.wait(until.elementsLocated(page.contactRecord_page.elements.selectFromSearchList), 10000)
                            .then(function () {
                                //   console.log('in function2');
                                driver.sleep(2000);
                                driver.findElement(page.contactRecord_page.elements.selectFromSearchList).click();
                                return driver.sleep(2000);
                            })
                    })
            })
    },

    searchSelectPerson2Subject: function (person2) {
        return driver.wait(until.elementsLocated(page.contactRecord_page.elements.subjectSearch), 10000)
            .then(function () {
                return driver.findElement(page.contactRecord_page.elements.subjectSearch).sendKeys(person2)
                    .then(function () {
                        return driver.wait(until.elementsLocated(page.contactRecord_page.elements.selectFromSearchList), 10000)
                            .then(function () {
                                driver.sleep(2000);
                                driver.findElement(page.contactRecord_page.elements.selectFromSearchList).click();
                                return driver.sleep(2000);
                            })
                    })
            })
    },

    toggleContactorDetails: function () {
        return driver.findElement(page.contactRecord_page.elements.toggleContactor).click()
            .then(function () {
                return driver.wait(until.elementsLocated(page.contactRecord_page.elements.contactMethods), 10000);
            })
    },

    set2Contactor: function () {
        driver.sleep(1500);
        driver.findElement(page.contactRecord_page.elements.contactorName).sendKeys(config.PersonDetails.Name);
        driver.wait(until.elementsLocated(page.contactRecord_page.elements.selectContactorName), 10000)
        return driver.sleep(1500)
            .then(function () {
                driver.findElement(page.contactRecord_page.elements.selectContactorName).click()
                return driver.sleep(500);
            })
            .then(function () {
                helpers.clickIncludesList(page.contactRecord_page.elements.contactMethods, "button", by.css('li a'), "Phone")
                helpers.clickIncludesList(page.contactRecord_page.elements.contactAbout, "button", by.css('li a'), "Adult Safeguarding Concern")
                return driver.findElement(page.contactRecord_page.elements.eventTimeDateField).click()
                    .then(function () {
                        driver.sleep(1000);
                        return helpers.clickIncludesList(page.contactRecord_page.elements.sourceOfReferral, 'button', by.css('li a'), "‘INDIVIDUAL’ – family member, relative or carer")
                            .then(function () {
                                //driver.executeScript('return window.scrollTo(' + 1100 + ',' + 70 + ');')
                                driver.sleep(500);
                                return helpers.clickIncludesList(page.contactRecord_page.elements.sourceOfReferralOne, 'button', by.css('li a'), "‘INDIVIDUAL’ – family member, relative or carer")
                            })
                        // .then(function () {
                        //     driver.findElement(page.contactRecord_page.elements.primarySupportReasonClick).click()
                        //     driver.findElement(page.contactRecord_page.elements.primarySupportReasonSelect).click()
                        //     return driver.wait(until.elementsLocated(page.contactRecord_page.elements.primarySupportSubReasonClick), 10000)
                        //         .then(function () {
                        //             console.log("1");
                        //             driver.sleep(300);
                        //             driver.findElement(page.contactRecord_page.elements.primarySupportSubReasonClick).click()
                        //             console.log("2");
                        //             driver.sleep(500);
                        //             return driver.findElement(page.contactRecord_page.elements.primarySupportSubReasonSelect).click()
                        //         })
                        // })
                    });
            })
    },

    setContactor: function () {
        driver.sleep(1500);
        driver.findElement(page.contactRecord_page.elements.contactMethodButton).click();
        helpers.clickIncludesGrid(page.contactRecord_page.elements.contactMethodList, by.css('li a'), 'Phone');
        driver.sleep(500);
        driver.findElement(page.contactRecord_page.elements.contactAboutButton).click();
        helpers.clickIncludesGrid(page.contactRecord_page.elements.contactAboutButtonList, by.css('li a'), 'Child in need');
        // helpers.selectOption(page.contactRecord_page.elements.contactAbout, 'Adult Safeguarding Concern');
        driver.sleep(500);
        return driver.findElement(page.contactRecord_page.elements.eventTimeDateField).click()
            .then(function () {
                driver.executeScript('return window.scrollTo(' + 1000 + ',' + 1000 + ');');
                driver.findElement(page.contactRecord_page.elements.sourceOfReferrallabel).click();
                return driver.wait(until.elementIsEnabled(driver.findElement(page.contactRecord_page.elements.sourceOfReferral)), 5000, "1st Source of Referral is not enabled")
                    .then(function (elem) {
                        return helpers.clickIncludesList(page.contactRecord_page.elements.sourceOfReferral, 'button', by.css('li a'), "‘INDIVIDUAL’ – family member, relative or carer");
                    })
            });
    },

    setExtraSrcReferral: function () {
        return driver.wait(until.elementLocated(page.contactRecord_page.elements.sourceOfReferralOne), 5000, "2nd Source of Referral element did not appear").then(function (srcRef) {
            return helpers.clickIncludesList(page.contactRecord_page.elements.sourceOfReferralOne, 'button', by.css('li a'), "‘INDIVIDUAL’ – family member, relative or carer");
        })
    },

    setContactorCustom: function (contactAboutText) {
        return driver.wait(until.elementLocated(page.contactRecord_page.elements.contactorName), 10000, 'contactorName Text box missing')
            .then(contactorNameElem => {
                return contactorNameElem.sendKeys(config.PersonDetails.Name);
            }).then(() => {
                return driver.wait(until.elementsLocated(page.contactRecord_page.elements.selectContactorNameSearchRes), 10000, 'contactorName Search List missing').then(function () {
                    // return driver.sleep(1500).then(function () {
                    return helpers.gridClick(page.contactRecord_page.elements.selectContactorNameList, by.css('div.option'), config.PersonDetails.Name).then(function () {
                        return driver.wait(until.elementsLocated(page.contactRecord_page.elements.ContactorPill), 10000, 'contactor Name Pill missing');
                    }).then(() => {
                        return helpers.clickIncludesList(page.contactRecord_page.elements.contactMethods, "button", by.css('li a'), "Phone").then(function () {
                            driver.sleep(500);
                            return helpers.clickIncludesList(page.contactRecord_page.elements.contactAbout, "button", by.css('li a'), contactAboutText)
                                .then(function () {
                                    return driver.findElement(page.contactRecord_page.elements.dateTimeEventReported).click().then(function () {
                                        //---------------
                                        var todaysDate = new Date();
                                        targetDate = new Date(todaysDate.getFullYear(), todaysDate.getMonth(), todaysDate.getDate() - 1);
                                        // console.log('date-1 : ', targetDate);
                                        return helpers.gridSelectDate(targetDate);
                                    })
                                        .then(function () {
                                            return driver.wait(until.elementLocated(page.contactRecord_page.elements.sourceOfReferral), 5000, 'Source of referral not located')
                                                .then(function (srcRefElem) {
                                                    // return helpers.scrollIntoView(srcRefElem).then(function () {
                                                    return helpers.clickIncludesList(page.contactRecord_page.elements.sourceOfReferral, 'button', by.css('li a'), "‘INDIVIDUAL’ – family member, relative or carer");
                                                    // });
                                                });
                                        });
                                })
                                .then(function () {
                                    if (contactAboutText == 'Private fostering') {
                                        driver.sleep(500);
                                        //----------------
                                        // driver.executeScript('return window.scrollTo(' + 1000 + ',' + 1000 + ');');
                                        // driver.sleep(1000);
                                        return driver.findElement(page.contactRecord_page.elements.privatefosteringStart).click()
                                            .then(function () {
                                                var todaysDate = new Date();
                                                targetDate = new Date(todaysDate.getFullYear(), todaysDate.getMonth(), todaysDate.getDate() - 2);
                                                // console.log('date-2 : ', targetDate);
                                                helpers.gridSelectDate(targetDate);
                                                global.PRIV_FOST_STARTDATE = dateFormat(targetDate, "dd/mm/yyyy");
                                                global.PRIV_FOST_ENDDATE = "Present";
                                                driver.findElement(page.contactRecord_page.elements.privFosterPlannedDuration).click()
                                                driver.wait(until.elementsLocated(page.contactRecord_page.elements.privFosterPlannedDurationList), 10000, 'privFosterPlannedDurationList missing');
                                                return helpers.gridClick(page.contactRecord_page.elements.privFosterPlannedDurationList, by.css('li a'), '3 to 6 months');
                                            })
                                            .then(function () {
                                                return driver.findElement(page.contactRecord_page.elements.privFosterCarerInput).sendKeys(config.PersonDetails.person1.Name)
                                                    .then(function () {
                                                        return driver.sleep(2000).then(function () {
                                                            return driver.wait(until.elementLocated(page.contactRecord_page.elements.privFosterCarerList), 10000, 'privFosterCarerList missing')
                                                                .then(function (privFosterCarerListElem) {
                                                                    return driver.wait(until.elementIsVisible(privFosterCarerListElem), 5000, "Element not visible")
                                                                        .then(function () {
                                                                            return driver.wait(until.elementIsVisible(driver.findElement(page.contactRecord_page.elements.selectprivFosterCarerInput)), 10000, 'privFosterCarer Element not enabled').then(function (privFostCarerElem) {
                                                                                return privFostCarerElem.click();
                                                                            });
                                                                        }).then(function () {
                                                                            return driver.wait(until.elementsLocated(page.contactRecord_page.elements.privFosterCarerBCard), 10000, 'privFosterCarerBCard missing');
                                                                        });
                                                                })
                                                        });
                                                    });
                                            })
                                            .then(function () {
                                                return driver.findElement(page.contactRecord_page.elements.privFosterCarerInput).sendKeys(config.PersonDetails.person2.Name)
                                                    .then(function () {
                                                        return driver.sleep(2000).then(function () {
                                                            return driver.wait(until.elementsLocated(page.contactRecord_page.elements.privFosterCarerList), 10000, 'privFosterCarerList missing')
                                                                .then(function () {
                                                                    return driver.wait(until.elementIsEnabled(driver.findElement(page.contactRecord_page.elements.selectprivFosterCarerInput)), 10000, 'privFosterCarer Element not enabled').then(function (privFostCarerElem) {
                                                                        return privFostCarerElem.click();
                                                                    });
                                                                }).then(function () {
                                                                    return driver.wait(until.elementsLocated(page.contactRecord_page.elements.privFosterCarerBCard), 10000, 'privFosterCarerBCard missing');
                                                                });
                                                        });
                                                    });
                                            })
                                            .then(function () {
                                                return driver.findElement(page.contactRecord_page.elements.privFosterReason).sendKeys('Private fostering reason');
                                            })
                                    } else if (contactAboutText == 'Missing') {
                                        return driver.findElement(page.contactRecord_page.elements.eventTimeDateField).click()
                                            .then(function () {
                                                var todaysDate = new Date();
                                                targetDate = new Date(todaysDate.getFullYear(), todaysDate.getMonth(), todaysDate.getDate() - 2);
                                                return helpers.gridSelectDate(targetDate).then(() => {
                                                    return global.eventDateDDMMYYYY = dateFormat(targetDate, "dd/mm/yyyy");
                                                });
                                            }).then(() => {
                                                return helpers.clickIncludesList(page.contactRecord_page.elements.missingType, "button", by.css('li a'), "Missing").then(function () {
                                                    return driver.findElement(page.contactRecord_page.elements.missingCircumstancesTextArea).sendKeys("Not like to go to School");
                                                }).then(function () {
                                                    return driver.findElement(page.contactRecord_page.elements.visitationTextArea).sendKeys("Friend's home");
                                                }).then(function () {
                                                    return driver.findElement(page.contactRecord_page.elements.healthIssuesTextArea).sendKeys("hand loss");
                                                })
                                            });
                                    }
                                });
                        });
                    });
                });
            });
    },

    verifyPrimarySupportReason: function () {
        return driver.findElement(page.contactRecord_page.elements.primarySupportReasonClick).getText()
            .then(function (primaryReason) {
                console.log(primaryReason)
                expect(primaryReason).to.contain('Mental Health support');
                return driver.findElement(page.contactRecord_page.elements.primarySupportSubReasonClick).getText()
                    .then(function (subPrimaryReason) {
                        console.log(subPrimaryReason)
                        expect(subPrimaryReason).to.contain('Mental Health support');
                        return driver.sleep(100);
                    })
            })
    },

    setMuliAllegeAbuseDetails: function () {
        return driver.wait(until.elementLocated(page.contactRecord_page.elements.abuseStatusDiv), 5000, "Not located")
            .then(function () {
                return helpers.clickIncludesList(page.contactRecord_page.elements.abuseStatusDiv, 'button', by.css("li a"), 'Confirmed').then(function () {

                    return driver.wait(until.elementLocated(page.contactRecord_page.elements.abuseStatusLabel), 30000).then(labelElem => {
                        return helpers.scrollIntoView(labelElem);
                    }).then(function () {
                        return driver.wait(until.elementLocated(page.contactRecord_page.elements.abuseStatusEmotionalAbuse), 300000, "Not located").then(function (emoAbuseElem) {
                            //console.log('aaaaaa');
                            return driver.wait(until.elementIsEnabled(emoAbuseElem), 30000, "Not enabled").then(function () {
                                return helpers.scrollIntoView1(driver.findElement(by.css('[data-bind*="allegedAbuseCatList"] tr:nth-child(1) td:nth-child(1) div.white-check input'))).then(function () {
                                    return emoAbuseElem.click()
                                }).catch(function (error) {
                                    return emoAbuseElem.sendKeys(selenium.Key.SPACE);
                                })
                                return driver.wait(until.elementLocated(page.contactRecord_page.elements.abuseStatusLabel), 30000).then(labelElem => {
                                    return helpers.scrollIntoView(labelElem);
                                }).then(function () {
                                    return driver.wait(until.elementLocated(page.contactRecord_page.elements.abuseStatusFinancialAbuse), 30000, "Not located").then(function (finAbuseElem) {
                                        //console.log('bbbbb');
                                        return driver.wait(until.elementIsEnabled(finAbuseElem), 30000, "Not enabled").then(function () {
                                            return helpers.scrollIntoView1(driver.findElement(by.css('[data-bind*="allegedAbuseCatList"] tr:nth-child(2) td:nth-child(1) div.white-check input'))).then(function () {
                                                return finAbuseElem.click()
                                            }).catch(function (error) {
                                                return finAbuseElem.sendKeys(selenium.Key.SPACE);
                                            })
                                        })
                                        return driver.wait(until.elementLocated(page.contactRecord_page.elements.abuseStatusLabel), 30000).then(labelElem => {
                                            return helpers.scrollIntoView(labelElem);
                                        })
                                            .then(function () {
                                                return driver.wait(until.elementLocated(page.contactRecord_page.elements.abuseStatusNeglect), 30000, "Not located").then(function (negAbuseElem) {
                                                    // console.log('cccccc');
                                                    return driver.wait(until.elementIsEnabled(negAbuseElem), 5000, "Not enabled").then(function () {
                                                        return helpers.scrollIntoView1(driver.findElement(by.css('[data-bind*="allegedAbuseCatList"] tr:nth-child(3) td:nth-child(1) div.white-check input'))).then(function () {
                                                            return negAbuseElem.click();
                                                        }).catch(function (error) {
                                                            return negAbuseElem.sendKeys(selenium.Key.SPACE);
                                                        })
                                                    })
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

    toggleNextSteps: function () {
        driver.executeScript('return window.scrollTo(' + 1500 + ',' + 1500 + ');');
        return driver.wait(until.elementsLocated(page.contactRecord_page.elements.nextStepToggleButton), 10000)
            .then(function () {
                return driver.findElement(page.contactRecord_page.elements.nextStepToggleButton).click();
                //   return driver.wait(until.elementsLocated(page.contactRecord_page.elements.addNextStep), 10000)
                //       .then(function () {
                //           console.log("Adding New step");
                //           return driver.findElement(page.contactRecord_page.elements.addNextStep).click()
                //       })
            })
    },

    clickFormName: function (formName) {
        return driver.wait(until.elementsLocated(page.contactRecord_page.elements.nextStepsList), 10000, 'nextStepsList not found').then(function () {
            return driver.findElement(page.contactRecord_page.elements.nextStepsList).click().then(function () {
                console.log('Clicking form name : ', formName);
                // var formList = page.contactRecord_page.elements.nextStepForm;
                var formList1 = '[name*="' + formName + '"] span';
                return driver.findElement(By.css(formList1)).then(function (formElem) {
                    return formElem.click().then(function () {
                        return driver.sleep(500);
                    });
                });
                //driver.findElement(By.css(formList1)).click();
            });
        });
    },

    verifyFormName: function (FORM, PROCESS) {
        return driver.wait(until.elementsLocated(page.contactRecord_page.elements.nextStepsList), 10000).then(function () {
            return driver.findElement(page.contactRecord_page.elements.nextStepsList).click().then(function () {
                return driver.wait(until.elementsLocated(page.contactRecord_page.elements.nextStepListUl), 10000).then(function () {
                    driver.findElement(page.contactRecord_page.elements.nextStepListUl).getText().then(function (nextStepListText) {
                        console.log('nextStepListText : ', nextStepListText);
                        expect(nextStepListText).to.contain(PROCESS);
                        expect(nextStepListText).to.contain(FORM);
                    });
                    driver.sleep(1000);
                    var expListItem = '[name="' + PROCESS + "-" + FORM + '"] a';
                    return driver.findElement(By.css(expListItem)).getText().then(function (returnFormName) {
                        expect(returnFormName).to.contain(FORM);
                        driver.findElement(page.contactRecord_page.elements.nextStepsList).click();
                    });
                });
            });
        });
    },

    searchSelectNextTeamRecord: function (teamName) {
        console.log("teamName: ", teamName);
        return driver.wait(until.elementsLocated(page.contactRecord_page.elements.chooseTeam), 10000)
            .then(function () {
                return driver.findElement(page.contactRecord_page.elements.chooseTeam).sendKeys(teamName)
                    .then(function () {
                        return driver.wait(until.elementsLocated(page.contactRecord_page.elements.setTeam), 10000)
                    })
                    .then(function () {
                        driver.sleep(1000);
                        driver.findElement(page.contactRecord_page.elements.setTeam).click();
                        return driver.sleep(1000);
                    })
            })
    },

    setPriority: function () {
        driver.findElement(page.contactRecord_page.elements.choosePriority).click();
        return driver.findElement(page.contactRecord_page.elements.setPriority).click();
    },

    clickSecondFormName: function (formName) {
        driver.findElement(page.contactRecord_page.elements.secondAddNextStage).click()
        return driver.wait(until.elementsLocated(page.contactRecord_page.elements.secondNextStepsList), 10000)
            .then(function () {
                return driver.findElement(page.contactRecord_page.elements.secondNextStepsList).click()
                    .then(function () {
                        //driver.executeScript('return window.scrollTo(' + 1500 + ',' + 1500 + ');');
                        var formList1 = '[data-view*="nextSteps"] [id="nextstep/action"]:nth-child(2) [name="' + formName + '"] a';
                        // console.log("formList1: ", formList1);
                        driver.findElement(By.css(formList1)).click();
                        return driver.sleep(2000);
                    })
            })
    },

    person1NextStep: function () {
        driver.findElement(page.contactRecord_page.elements.secondNextStage).click()
        //        return driver.wait(until.elementsLocated(page.contactRecord_page.elements.removeSecondPerson), 10000)
        //            .then(function () {
        driver.findElement(page.contactRecord_page.elements.removeSecondPerson).click();
        return driver.sleep(1500);
        //            })
    },

    searchSelectNextTeamSecondRecord: function (teamName) {
        console.log("teamName: ", teamName);
        return driver.wait(until.elementsLocated(page.contactRecord_page.elements.chooseSecondTeam), 10000)
            .then(function () {
                return driver.findElement(page.contactRecord_page.elements.chooseSecondTeam).sendKeys(teamName)
                    .then(function () {
                        return driver.wait(until.elementsLocated(page.contactRecord_page.elements.selectTeam), 10000)
                            .then(function () {
                                driver.sleep(1500);
                                return driver.findElement(page.contactRecord_page.elements.selectTeam).click()
                                //helpers.gridClick(page.contactRecord_page.elements.nextStep2selectTeamList, page.contactRecord_page.elements.nextStep2selectTeamListItem, teamName);
                                //return driver.sleep(3000);
                                //return driver.findElement(page.contactRecord_page.elements.selectTeam).click();
                            });
                    });
            });
    },

    selectSecondNextPriority: function () {
        driver.findElement(page.contactRecord_page.elements.prioritySecondList).click();
        return driver.findElement(page.contactRecord_page.elements.selectSecondPriority).click();
    },

    clickThirdFormName: function (formName) {
        return driver.findElement(page.contactRecord_page.elements.thirdNextStepsList).click()
            .then(function () {
                var formList1 = '[data-view*="nextSteps"] [id="nextstep/action"]:nth-child(3) [name="' + formName + '"] a';
                return driver.findElement(By.css(formList1)).click();
            })
    },

    person2NextStep: function () {
        // return driver.wait(until.elementsLocated(page.contactRecord_page.elements.removeFirstPerson), 10000)
        //     .then(function () {
        //         return driver.findElement(page.contactRecord_page.elements.removeFirstPerson).click();
        //     })
        return driver.sleep(100);
    },

    searchSelectNextTeamThirdRecord: function (teamName) {
        return driver.wait(until.elementsLocated(page.contactRecord_page.elements.chooseThirdTeam), 10000)
            .then(function () {
                return driver.findElement(page.contactRecord_page.elements.chooseThirdTeam).sendKeys(teamName)
                    .then(function () {
                        return driver.wait(until.elementsLocated(page.contactRecord_page.elements.selectTeam), 10000)
                            .then(function () {
                                driver.sleep(2000);
                                return driver.findElement(page.contactRecord_page.elements.selectTeam).click()
                                //   helpers.gridClick(page.contactRecord_page.elements.nextStep3selectTeamList, page.contactRecord_page.elements.nextStep3selectTeamListItem, teamName);
                                //      return driver.sleep(3000);
                            });
                    });
                //                .then(function () {
                //                  driver.sleep(2000);
                //                return driver.findElement(page.contactRecord_page.elements.selectTeam).click();
                //          })
            });
    },

    selectThirdNextPriority: function () {
        driver.findElement(page.contactRecord_page.elements.priorityThirdList).click();
        return driver.findElement(page.contactRecord_page.elements.selectThirdPriority).click();
    },

    isContactRecordTwoVisible: function () {
        return driver.wait(until.elementsLocated(page.contactRecord_page.elements.contactVersions), 10000)
            .then(function () {
                return driver.findElement(page.contactRecord_page.elements.contactVersions).click()
                    .then(function () {
                        return driver.wait(until.elementsLocated(page.contactRecord_page.elements.contactRecordFirstVersion), 10000)
                            .then(function () {
                                return driver.wait(until.elementsLocated(page.contactRecord_page.elements.contactRecordSecondVersion), 10000)
                            })
                    })
            })
    },

    toggleSubject: function () {
        return driver.wait(until.elementsLocated(page.contactRecord_page.elements.subjectToggle), 10000)
            .then(function () {
                driver.sleep(1000);
                return driver.findElement(page.contactRecord_page.elements.subjectToggle).click()
                    .then(function () {
                        driver.sleep(1000);
                        driver.wait(until.elementsLocated(page.contactRecord_page.elements.subjectInternalToggle), 10000)
                        driver.sleep(1000);
                        driver.findElement(page.contactRecord_page.elements.subjectInternalToggle).click();
                        return driver.sleep(1000);
                    })
            })
    },

    validatePersonDetails: function () {
        var script = "return document.getElementById('#address.line2').innerHTML";
        var telno = driver.executeScript(script);
        console.log("telno: ", telno);
        //return driver.findElement(page.contactRecord_page.elements.addressHouseInPersonDetails).getAttribute("Value")
        //driver.executeScript('return window.scrollTo('+700+','+700+');')
        //return driver.executeScript('return angular.element($(page.contactRecord_page.elements.addressHouseInPersonDetails)).text()";')
        return driver.ExecuteScript("return arguments[0].innerHTML", page.contactRecord_page.elements.addressHouseInPersonDetails).ToString()
            // return (String)((JavascriptExecutor) driver).executeScript("Java script query  in here to return value","");
            .then(function (House) {
                console.log("House: ", House);
                return expect(House).to.equal(config.PersonDetails.Address.House);
            })
            .then(function () {
                return driver.findElement(page.contactRecord_page.elements.addressAreaInPersonDetails).getAttribute("value")
                    .then(function (Area) {
                        return expect(Area).to.equal(config.PersonDetails.Address.Area);
                    })
            })
            .then(function () {
                return driver.findElement(page.contactRecord_page.elements.addressTownInPersonDetails).getAttribute("data-bind")
                    .then(function (Town) {
                        return expect(Town).to.equal(config.PersonDetails.Address.Town);
                    })
            })
            .then(function () {
                return driver.findElement(page.contactRecord_page.elements.addressCountryInPersonDetails).getText()
                    .then(function (Country) {
                        return expect(Town).to.equal(config.PersonDetails.Address.Country);
                    })
            })
            .then(function () {
                return driver.findElement(page.contactRecord_page.elements.addressPostInPersonDetails).getText()
                    .then(function (Post) {
                        return expect(Post).to.equal(config.PersonDetails.Address.Post);
                    })
            })
    },

    setMissingContactor: function () {
        driver.sleep(1500);
        driver.findElement(page.contactRecord_page.elements.ContactorDetailsAccordian).click().then(function () {
            driver.findElement(page.contactRecord_page.elements.contactorName).sendKeys(config.PersonDetails.Name);
            driver.wait(until.elementsLocated(page.contactRecord_page.elements.selectContactorName), 10000)
            return driver.sleep(1500)
                .then(function () {
                    driver.findElement(page.contactRecord_page.elements.selectContactorName).click()
                    return driver.sleep(500);
                })
                .then(function () {
                    helpers.clickIncludesList(page.contactRecord_page.elements.contactMethods, "button", by.css('li a'), "Phone");
                    helpers.clickIncludesList(page.contactRecord_page.elements.contactAbout, "button", by.css('li a'), "Missing");
                    return driver.findElement(page.contactRecord_page.elements.eventTimeDateField).click()
                        .then(function () {
                            driver.executeScript('return window.scrollTo(' + 700 + ',' + 700 + ');')
                            driver.sleep(1000);
                            helpers.clickIncludesList(page.contactRecord_page.elements.missingType, "button", by.css('li a'), "Missing");
                            return helpers.clickIncludesList(page.contactRecord_page.elements.sourceOfReferral, 'button', by.css('li a'), "‘INDIVIDUAL’ – family member, relative or carer");
                        });
                });
        });
    },

    setAbsentContactor: function () {
        driver.sleep(1500);
        driver.findElement(page.contactRecord_page.elements.contactorName).sendKeys(config.PersonDetails.Name);
        driver.wait(until.elementsLocated(page.contactRecord_page.elements.selectContactorName), 10000)
        return driver.sleep(1500)
            .then(function () {
                driver.findElement(page.contactRecord_page.elements.selectContactorName).click()
                return driver.sleep(500);
            })
            .then(function () {
                helpers.clickIncludesList(page.contactRecord_page.elements.contactMethods, "button", by.css('li a'), "Phone");
                helpers.clickIncludesList(page.contactRecord_page.elements.contactAbout, "button", by.css('li a'), "Missing");
                helpers.clickIncludesList(page.contactRecord_page.elements.missingType, "button", by.css('li a'), "Absent");
                return driver.findElement(page.contactRecord_page.elements.eventTimeDateField).click()
                    .then(function () {
                        driver.executeScript('return window.scrollTo(' + 700 + ',' + 700 + ');')
                        driver.sleep(800);
                        return helpers.clickIncludesList(page.contactRecord_page.elements.sourceOfReferral, 'button', by.css('li a'), "‘INDIVIDUAL’ – family member, relative or carer");
                    });
            });
    },

    verifyMissingPerson: function () {
        return driver.wait(until.elementsLocated(page.contactRecord_page.elements.missingFlag), 10000)
            .then(function () {
                return driver.findElement(page.contactRecord_page.elements.missingFlag).getText()
                    .then(function (flag) {
                        expect(flag).to.equal("Missing");
                    })

            })

    },

    verifyAbsentPerson: function () {
        return driver.wait(until.elementsLocated(page.contactRecord_page.elements.missingFlag), 10000)
            .then(function () {
                return driver.findElement(page.contactRecord_page.elements.missingFlag).getText()
                    .then(function (flag) {
                        expect(flag).to.equal("Absent");
                    })

            })

    },

    verifyContactorDetails: function () {
        driver.wait(until.elementsLocated(page.contactRecord_page.elements.contactorLabel), 10000);
        return driver.findElement(page.contactRecord_page.elements.contactorLabel).getText()
            .then(function (contactorLabel) {
                return expect(contactorLabel).to.equal("Contactor");
            })
            .then(function () {
                driver.wait(until.elementsLocated(page.contactRecord_page.elements.nameLabel), 10000);
                return driver.findElement(page.contactRecord_page.elements.nameLabel).getText();
            })
            .then(function (nameLabel) {
                return expect(nameLabel).to.equal("Name");
            })
            .then(function () {
                driver.wait(until.elementsLocated(page.contactRecord_page.elements.contactMethodLabel), 10000);
                return driver.findElement(page.contactRecord_page.elements.contactMethodLabel).getText();
            })
            .then(function (contactMethodLabel) {
                return expect(contactMethodLabel).to.equal("Contact method");
            })
            .then(function () {
                driver.wait(until.elementsLocated(page.contactRecord_page.elements.contactAboutLabel), 10000);
                return driver.findElement(page.contactRecord_page.elements.contactAboutLabel).getText();
            })
            .then(function (contactAboutLabel) {
                return expect(contactAboutLabel).to.equal("Contact is about");
            })
            .then(function () {
                driver.wait(until.elementsLocated(page.contactRecord_page.elements.timeOfEventLabel), 10000);
                return driver.findElement(page.contactRecord_page.elements.timeOfEventLabel).getText();
            })
            .then(function (timeOfEventLabel) {
                return expect(timeOfEventLabel).to.equal("Date and time of the event");
            })
            .then(function () {
                driver.wait(until.elementsLocated(page.contactRecord_page.elements.eventReportedLabel), 10000);
                return driver.findElement(page.contactRecord_page.elements.eventReportedLabel).getText();
            })
            .then(function (eventReportedLabel) {
                return expect(eventReportedLabel).to.equal("Date and time event reported");
            })
            .then(function () {
                driver.wait(until.elementsLocated(page.contactRecord_page.elements.eventLocationLabel), 10000);
                return driver.findElement(page.contactRecord_page.elements.eventLocationLabel).getText();
            })
            .then(function (eventLocationLabel) {
                return expect(eventLocationLabel).to.equal("Location of the event");
            })
            .then(function () {
                driver.wait(until.elementsLocated(page.contactRecord_page.elements.contactorProfessionalLabel), 10000);
                return driver.findElement(page.contactRecord_page.elements.contactorProfessionalLabel).getText();
            })
            .then(function (contactorProfessionalLabel) {
                return expect(contactorProfessionalLabel).to.equal("Is the contactor a professional?");
            })
            .then(function () {
                driver.wait(until.elementsLocated(page.contactRecord_page.elements.reasonLabel), 10000);
                return driver.findElement(page.contactRecord_page.elements.reasonLabel).getText();
            })
            .then(function (reasonLabel) {
                return expect(reasonLabel).to.equal("Reasons that led to this contact");
            })
            .then(function () {
                driver.executeScript('return window.scrollTo(' + 1100 + ',' + 700 + ');')
                driver.wait(until.elementsLocated(page.contactRecord_page.elements.contactFamilyLabel), 10000);
                return driver.findElement(page.contactRecord_page.elements.contactFamilyLabel).getText();
            })
            .then(function (contactFamilyLabel) {
                return expect(contactFamilyLabel).to.equal("Have you discussed the contact with the family?");
            })
            .then(function () {
                driver.wait(until.elementsLocated(page.contactRecord_page.elements.riskLabel), 10000);
                return driver.findElement(page.contactRecord_page.elements.riskLabel).getText();
            })
            .then(function (riskLabel) {
                return expect(riskLabel).to.equal("Are there any risks around disclosure or making contact with any family members?");
            })
            .then(function () {
                driver.wait(until.elementsLocated(page.contactRecord_page.elements.otherSubjectLabel), 10000);
                return driver.findElement(page.contactRecord_page.elements.otherSubjectLabel).getText();
            })
            .then(function (otherSubjectLabel) {
                return expect(otherSubjectLabel).to.equal("Other subject details");
            })
            .then(function () {
                driver.findElement(page.contactRecord_page.elements.sourceLabel).click();
                return driver.findElement(page.contactRecord_page.elements.sourceLabel).getText();
            })
            .then(function (sourceLabel) {
                return expect(sourceLabel).to.equal("Source of referral");
            })

    },

    toggleRecommendationDetails: function () {
        return driver.findElement(page.contactRecord_page.elements.toggleRecommendation).click()
            .then(function () {
                return driver.wait(until.elementsLocated(page.contactRecord_page.elements.recommendationDetails), 10000);
            })
    },

    verifyRecommendationsDetails: function () {
        driver.wait(until.elementsLocated(page.contactRecord_page.elements.recommendationName), 10000);
        return driver.findElement(page.contactRecord_page.elements.recommendationName).getText()
            .then(function (recommendationName) {
                config = jsonfile.readFileSync('./support/' + featureConfig);
                var name = config.PersonDetails.Name;
                return expect(recommendationName).to.equal("" + name + "");
            })
            .then(function () {
                driver.wait(until.elementsLocated(page.contactRecord_page.elements.recommendationDetails), 10000);
                return driver.findElement(page.contactRecord_page.elements.recommendationDetails).getText();
            })
            .then(function (recommendationDetails) {
                return expect(recommendationDetails).to.equal("Details");
            })

    },
    addNewPersonfromContactorDetails: function () {
        return driver.wait(until.elementLocated(page.contactRecord_page.elements.contactorName), 5000, "Contactor Name is not present ").then(function () {
            return driver.findElement(page.contactRecord_page.elements.contactorName).sendKeys("vxcqqeewrwewer").then(function () {
                driver.sleep(4000);

                return driver.findElement(page.contactRecord_page.elements.addNewPerson).click().then(function () {
                    return driver.findElement(page.contactRecord_page.elements.firstName).clear().then(function () {
                        var faker = require('faker');
                        driver.findElement(page.contactRecord_page.elements.firstName).sendKeys(faker.name.firstName());
                        driver.findElement(page.contactRecord_page.elements.middleName).sendKeys(faker.name.firstName());
                        driver.findElement(page.contactRecord_page.elements.lastName).sendKeys(faker.name.lastName());
                        return driver.findElement(page.contactRecord_page.elements.dob).click().then(function () {
                            var todaysDate = new Date();
                            targetDate = new Date(todaysDate.getFullYear(), todaysDate.getMonth(), todaysDate.getDate() - 1);
                            // console.log('date-1 : ', targetDate);
                            helpers.gridSelectDate(targetDate);
                            return driver.findElement(page.contactRecord_page.elements.createPersonButton).click();
                        });
                    });
                });
            });
        });
    },
    verifyValidation: function () {
        return driver.wait(until.elementLocated(page.contactRecord_page.elements.validationDiv), 5000, "Validation section is not located").then(function () {
            // return driver.findElement(page.contactRecord_page.elements.validationDiv).getAttribute("data-active-view").then(function (dataActiveView) {
            return driver.findElement(page.contactRecord_page.elements.validationDiv).isDisplayed().then(function (isdisplayed) {
                console.log(isdisplayed);
                return expect(isdisplayed).to.be.true;
            });
        });
    },
    setContactorStockton: function () {
        //driver.sleep(1500);
        return driver.findElement(page.contactRecord_page.elements.contactMethodButton).click().then(function () {
            return helpers.clickIncludesGrid(page.contactRecord_page.elements.contactMethodList, by.css('li a'), 'Phone').then(function () {
                return driver.findElement(page.contactRecord_page.elements.contactAboutButton).click().then(function () {
                    return helpers.clickIncludesGrid(page.contactRecord_page.elements.contactAboutButtonList, by.css('li a'), 'Child in need').then(function () {
                        return driver.findElement(page.contactRecord_page.elements.eventTimeDateField).click()
                            .then(function () {
                                driver.executeScript('return window.scrollTo(' + 800 + ',' + 800 + ');');
                                return driver.findElement(page.contactRecord_page.elements.reasonTextArea).sendKeys('Test Reason That led to this contact').then(function () {
                                    if (ENVIRONMENT != 'stockton1') {
                                        driver.executeScript('return window.scrollTo(' + 1000 + ',' + 1000 + ');');
                                        return helpers.clickIncludesList(page.contactRecord_page.elements.sourceOfReferral, 'button', by.css('li a'), "‘INDIVIDUAL’ – family member, relative or carer");
                                    }
                                })
                            });
                    });
                });

            });
        });

    },
    togglePersonDetails: function () {
        return driver.findElements(page.contactRecord_page.elements.togglePersonBanner).then(function (element) {
            element[0].click()
            return driver.wait(until.elementsLocated(page.contactRecord_page.elements.subjectPersonform), 10000);
        });
        //});
    },
    PersonDetails: function () {
        driver.sleep(1500);
        driver.findElement(page.contactRecord_page.elements.subjectPersonform).click();

    },

    setContactIsAbout: function (contactAboutText) {
        return driver.wait(until.elementLocated(page.contactRecord_page.elements.contactAbout), 5000, "contactAbout is not located").then(function () {
            return helpers.clickIncludesList(page.contactRecord_page.elements.contactAbout, "button", by.css('li a'), contactAboutText);
        });
    }
}