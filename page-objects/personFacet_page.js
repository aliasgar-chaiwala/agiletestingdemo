var dateFormat = require('dateformat');
module.exports = {

    //  url: 'https://www.google.co.in/[a-zA-Z0-9\-_?=]+',

    elements: {
        personBanner: by.css('.person-banner.new-person-banner'),
        personCaseBanner: by.css('[class="person-banner"]'),
        addressOnBanner: by.css('.banner.address > div > span'),
        ageOnBanner: by.css('.person-banner span[class="age"]'),
        editIcon: by.css('.icon-edit-rect'),
        duplicateIconOnToolbar: by.css('.icon-duplicate-record'),
        // educationWidget: by.css('[aria-label="Education section, press enter to navigate each Education details or tab to navigate next section"]'),
        educationWidget: by.css('[name="Education-section"]'),
        educationLink: by.css('[name="Education-section"] > h3:nth-child(1) > a'),
        //  educationLink: by.css('[aria-label="Education section, press enter to navigate each Education details or tab to navigate next section"] > h3:nth-child(1) > a')
        involvementVisible: by.css('[name="involvement-title"]'),
        personName: by.css('.given-name.pointer'),
        personId: by.css('.system-id'),
        educationLabel: by.css('[aria-label="Education Details"]'),
        educationAttendance: by.css('div[name="Education-section"] > div:nth-child(5) > div:nth-child(1) > div:nth-child(2)'),
        educationExclusion: by.css('div[name="Education-section"] > div:nth-child(5) > div:nth-child(2) > div:nth-child(2)'),
        educationSEN_Status: by.css('div[name="Education-section"] > div:nth-child(5) > div:nth-child(3) > div:nth-child(2)'),
        educationFSM_Status: by.css('div[name="Education-section"] > div:nth-child(5) > div:nth-child(4) > div:nth-child(2)'),
        essentialInfo: by.css('[name="educationInfo"] div:nth-child(2) div'),
        //----------------RG---------
        essentioalInfoSection: by.css('div[name="essentialInfo-section"]'),
        essentialInfoNotifRow: by.css('div.row.m-b-sm'),
        essentialInfoCaseCloseIcon: by.css('div[name="essentialInfo-section"] span.icon-case-closer.icon-bigger'),
        //-------------------------
        FormsLink: by.css('div[name="Forms-section"] a[data-bind*="click"]'),
        PlansLink: by.css('div[name="plan-section"] a[data-bind*="click"]'),
        caseInfo: by.css('[aria-label="Case information access"]'),
        caseInfoAccess: by.css('div.case-confidential-panel.show .confidential-container h4.create-new-title'),
        caseDenyAccess: by.css('[aria-label="Access denied to, black list"]'),
        caseAllowAccess: by.css('[aria-label="Access provided to, white list"]'),
        setDenyAccessToManager: by.css('#denied div.selectize-input.items.not-full > input[type="text"]'),
        denyAccessSearchList: by.css('.confidential-container .selectize-dropdown-content .option'),
        selectDenyAccessManager: by.css('#denied div.selectize-dropdown.multi.form-control.plugin-remove_button .selectize-dropdown-content .option:nth-child(1)'),
        denyAccessSelectedUserPill: by.css('.confidential-container .list-pane span.worker-tag'),
        confirmDenyButton: by.css('#denied .btn.btn-primary.btn-sm.strong'),
        confidentialMessage: by.css('.autosave.saving'),
        setAllowAccessToManager: by.css('#allowed div.selectize-input.items.not-full > input[type="text"]'),
        selectAllowAccessManager: by.css('#allowed div.selectize-dropdown.multi.form-control.plugin-remove_button .selectize-dropdown-content .option'),
        confirmAllowButton: by.css('#allowed button.btn.btn-primary.btn-sm.strong'),
        formsList: by.css('tbody'),
        strategyDiscussionJourney: by.css('[name="journey_section"]'),
        //('#collapseProcessDetails0 > div > div > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(1) > div > span:nth-child(2)'),
        subjectInPill: by.css('.col-sm-11 div.col-sm-11 .selectize-input.items.not-full.has-options.has-items > span'),
        finance: by.css('[data-bind*="visible:blacklistedFinance === "] > h3'),
        budget: by.css('[name="Finance"] > div:nth-child(2) > h4'),
        contributions: by.css('[name="Finance"] > div:nth-child(4) > h4'),
        provision: by.css('[name="Finance"] > div:nth-child(6) > h4'),
        blackListMessage: by.css('#maincontent > div > div > div.person-toolbar > div > div.autosave.saving'),
        //--------------
        eventsWidgetBlock: by.css('div.tab-section[name="Events-section"]'),
        eventsWidgetTitle: by.css('div.tab-section[name="Events-section"] h3'),
        eventsWidgetTitleLink: by.css('div.tab-section[name="Events-section"] h3 a'),
        eventsWidgetEventRow: by.css('.row .event-wordwrap'),
        eventsPageSection: by.css('.events-app-container'),
        //-----------------------
        relationShipWidget: by.css('div[name="relationship_section"]'),
        connectionNameOnPill: by.css('div[name="connections-pills"] a.person-tag-base'),
        connectionRelationOnPill: by.css('div[name="connections-pills"] div.m-t-xs'),
        relationGroupSection: by.css('div[name="group-section"]'),
        groupPill: by.css('a.member-tag'),
        eventList: by.css('[name="Events-section"] div:nth-child(5)'),
        perticularEvent: by.css('.col-sm-8.event-wordwrap'),
        formJourneyStatus: by.css('#collapseProcessDetails0 [class="process-item"]:nth-child(1) > div > div [class="pull-right m-r-sm"]'),
        mentalCapacity: by.css('.mental-capacity'),
        journey: by.css('[name="journey_section"] > div:nth-child(4)'),
        journeyForms: by.css('span[class="col-sm-7 align-middle m-l-n pointer"]'),
        toggleJourney: by.css('[name="journey_section"] > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) a'),
        riskName: by.css('[name="Needs-Risks-section"] [id="autoNeedsName"]'),
        EduInstituteName: by.css('[class="m-l-sm"] div:nth-child(2) div:nth-child(2)'),
        courseLevel: by.css('[class="m-l-sm"] div:nth-child(3) div:nth-child(2)'),
        EduCourse: by.css('[class="m-l-sm"] div:nth-child(4) div:nth-child(2)'),
        mentalCapacityList: by.css('[class="mental-capacity "] '),
        perticularMentalCapacity: by.css('.row [title="Financial checks"]'),
        needsRisksStregnthsWidget: by.css('#needs'),
        needsRisksStrengthList: by.css('#plan-situation-cover'),
        contributionsMore: by.css('[name="Finance"] div:nth-child(4) div:nth-child(3) a'),
        contributionsLabel: by.css('[data-view*="listContribution"] > h2'),
        activityLabel: by.css('div.btn-group.btn-group-sm.pull-right button'),
        exploreCaseLabel: by.css('div.btn-group.btn-group-sm.pull-right ul.dropdown-menu.explore-dropdown li:nth-child(1) div.explore-section-title'),
        transferCaseLabel: by.css('div.btn-group.btn-group-sm.pull-right ul.dropdown-menu.explore-dropdown li:nth-child(2) div.explore-section-title'),
        closeCaseLabel: by.css('div.btn-group.btn-group-sm.pull-right ul.dropdown-menu.explore-dropdown li:nth-child(3) div.explore-section-title'),
        placementLabel: by.css('div.btn-group.btn-group-sm.pull-right ul.dropdown-menu.explore-dropdown li:nth-child(4) div.explore-section-title'),
        activitiesLabel: by.css('div.btn-group.btn-group-sm.pull-right ul.dropdown-menu.explore-dropdown li:nth-child(5) div.col-sm-10'),
        summaryLabel: by.css('div.btn-group.btn-group-sm.pull-right ul.dropdown-menu.explore-dropdown li:nth-child(6) div.col-sm-10'),
        connectionsLabel: by.css('div.btn-group.btn-group-sm.pull-right ul.dropdown-menu.explore-dropdown li:nth-child(7) div.col-sm-10'),
        needAndRiskLabel: by.css('div.btn-group.btn-group-sm.pull-right ul.dropdown-menu.explore-dropdown li:nth-child(8) div.col-sm-10'),
        journeyBlock: by.css('[name*="journey_section"]'),
        leavingCareProcess: by.css('div.panel-title-journey'),
        journeyProcessForm: by.css('.process-list span.align-middle'),
        LCPStartDate: by.css('[name*="journey_section"] > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)'),
        LCPDueDate: by.css('[name*="journey_section"] > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)'),
        journeyProcessFormStatus: by.css('.process-list div.col-sm-12 > div span:nth-child(5)'),
        caseOwnerDetails: by.css('[name= "Casesummary-section"] > div:nth-child(2)'),
        contactArrangement: by.css('a[data-bind*="contactArrangementView"]'),
        contactArrangements: by.css('h2[class="page-title"]'),
        caseSummaryWidget: by.css('[name= "Casesummary-section"]'),
        privFosteringSec: by.css('[name= "Casesummary-section"] div[name="private-fostering-section"]'),
        privFosteringSecTitle: by.css('div[name="private-fostering-section"] h4 a'),
        privFosteringSecData: by.css('div[name="private-fostering-section"] div.form-group'),
        EduTrainingName: by.css('[name="Education-section"] h4:nth-child(10) a'),
        TrainingMoreLnk: by.css('[name="Education-section"] [class="more-link-color middle"]'),
        TrainingLableInEdu: by.css('[aria-label="Training"]'),
        caseOwnerDetailsOne: by.css('[name= "Casesummary-section"] > div:nth-child(2) span:nth-child(2)'),
        widgetTitle: by.css('.pvm-one-third h3 a'),
        widgetContainer: by.css('.person-view-masonry-new .container-fluid'),
        journeyContainer: by.css('.journeys .container-fluid'),
        journeyAccodian: by.css('.pull-right .arrow'),
        JourneyBlk: by.css('.journey-panel'),
        addFormOrPlanButton: by.css('.btnAddFormPlan'),
        selectFormOrPlanDropdown: by.css('.btn-dropdown'),
        dropDownList: by.css('div.dropdown'),
        elementFromDropDownList: by.css('li a'),
        tickIcon: by.css('.icon-thik-tick'),
        deleteIcon: by.css('.gradient-pattern'),
        scrollBar: by.css('.mCSB_dragger > div'),
        formName: by.css('#mCSB_3_container > div:nth-child(13) > div.inline.col-lg-9.col-sm-8 > span'),
        editPersonPageTitle: by.css('h2[class="page-title"]'),
        crossIcon: by.css(('div[for="deleteConfirmBtn"] a[class*="deleteConfirmIcon"]')),
        dropDown: by.css(('#formPlan_dropdown button')),
        widgetsOnPage: by.css('div.pvm-item > div:nth-child(1) > h3:nth-child(1)'),
        caseOwnerLabel: by.css('div[data-bind*="blacklistedCaseOwnerDetails"]'),
        missngTextOnPersonBanner: by.css('div.case-flag > span'),
        missngIconOnPersonBanner: by.css('i.icon-missing'),
    },

    personFacetVerification: function () {
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.personBanner), 20000)
            .then(function () {
                return driver.wait(until.elementsLocated(page.personFacet_page.elements.personName), 20000)
                    .then(function () {
                        driver.sleep(2000);
                        return driver.wait(until.elementsLocated(page.personFacet_page.elements.educationWidget), 10000)
                            .then(function () {
                                return driver.findElement(page.personFacet_page.elements.educationLink).getText()
                                    .then(function (educationLinkTxt) {
                                        return expect(educationLinkTxt).to.equal("Education");
                                    });
                            });
                    });
            });
    },

    personFacetVerificationWithAddress: function () {
        return page.personFacet_page.personFacetVerification().then(function () {
            var addressAtBannerText = "";
            return driver.findElements(page.personFacet_page.elements.addressOnBanner)
                .then(function (options) {
                    options.some(function (option) {
                        option.getText().then(function (addrText) {
                            addressAtBannerText += addrText;
                        });
                    })
                })
                .then(function (options) {
                    config = jsonfile.readFileSync('./support/' + featureConfig);
                    var addressStored = "";
                    addressStored += (addressStored != "" && config.PersonDetails.Address.House != "") ? (", " + config.PersonDetails.Address.House) : "";
                    addressStored += (addressStored != "" && config.PersonDetails.Address.Area != "") ? (", " + config.PersonDetails.Address.Area) : "";
                    addressStored += (addressStored != "" && config.PersonDetails.Address.Town != "") ? (", " + config.PersonDetails.Address.Town) : "";
                    addressStored += (addressStored != "" && config.PersonDetails.Address.Country != "") ? (", " + config.PersonDetails.Address.Country) : "";
                    addressStored += (addressStored != "" && config.PersonDetails.Address.Post != "") ? (", " + config.PersonDetails.Address.Post) : "";
                    return expect(addressAtBannerText).to.contain(addressStored);
                });
        });
    },

    personCaseFacetVerification: function () {
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.personCaseBanner), 25000)
            .then(function () {
                return driver.wait(until.elementsLocated(page.personFacet_page.elements.personName), 25000)
                    .then(function () {
                        driver.sleep(1500);
                        return driver.wait(until.elementsLocated(page.personFacet_page.elements.educationWidget), 20000)
                            .then(function () {
                                return driver.findElement(page.personFacet_page.elements.educationLink).getText()
                                    .then(function (educationLinkTxt) {
                                        return expect(educationLinkTxt).to.equal("Education");
                                    });
                            })
                    });
            });
    },

    personNameVerification: function (person) {
        //driver.wait(until.elementsLocated(page.personFacet_page.elements.personBanner), 15000);
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.personName), 15000)
            .then(function () {
                return driver.findElement(page.personFacet_page.elements.personName).getText()
                    .then(function (pName) {
                        //  console.log("pName : ", pName);
                        //  console.log("person : ", person);
                        return expect(pName).to.equal(person);
                    });
            });
    },

    educationNavigation: function () {
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.educationWidget), 10000)
            .then(function () {
                driver.findElement(page.personFacet_page.elements.educationLink).click();
                return driver.wait(until.elementsLocated(page.personFacet_page.elements.educationLabel), 10000)
            });
    },

    validateEducationDetails: function () {
        return driver.findElement(page.personFacet_page.elements.educationAttendance).getText()
            .then(function (attendance) {
                expect(attendance).to.equal('Overall 55%');
                return driver.findElement(page.personFacet_page.elements.educationExclusion).getText()
                    .then(function (exclusion) {
                        expect(exclusion).to.equal('2 in academic year');
                        return driver.findElement(page.personFacet_page.elements.educationSEN_Status).getText()
                            .then(function (sen) {
                                expect(sen).to.equal('E - Education Health and Care Plan');
                                return driver.findElement(page.personFacet_page.elements.educationFSM_Status).getText()
                                    .then(function (fsm) {
                                        return expect(fsm).to.equal('No');
                                    });
                            });
                    });
            });
    },

    validateEssentialInfo: function (essentialInfoString) {
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.essentialInfo), 10000)
            .then(function () {
                return driver.findElement(page.personFacet_page.elements.essentialInfo).getText()
                    .then(function (essential) {
                        return expect(essential).to.equal(essentialInfoString);
                    });
            });
    },

    personFacetFormsVerification: function () {
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.FormsLink), 25000).then(function () {
            return driver.findElement(page.personFacet_page.elements.FormsLink).getText().then(function (FormsLinkTxt) {
                expect(FormsLinkTxt).to.equal("Forms");
                return driver.findElement(page.personFacet_page.elements.FormsLink).click().then(function () {
                    return driver.sleep(2000).then(function () {
                        return driver.wait(until.elementsLocated(page.personFacet_page.elements.formsList), 25000);
                    })
                });
            });
        });
    },

    caseConfidentialityDenyAccess: function (USERNAME) {
        driver.wait(until.elementsLocated(page.personFacet_page.elements.caseInfo), 15000);
        return driver.findElement(page.personFacet_page.elements.caseInfo).click().then(function () {
            driver.wait(until.elementsLocated(page.personFacet_page.elements.caseInfoAccess), 15000);
            // driver.sleep(3000);
            return driver.findElement(page.personFacet_page.elements.caseInfoAccess).getText()
                .then(function (caseInfoAccessTxt) {
                    expect(caseInfoAccessTxt).to.equal("Case information access")
                    return driver.findElement(page.personFacet_page.elements.caseDenyAccess).click().then(function () {
                        return driver.findElement(page.personFacet_page.elements.caseDenyAccess).getText()
                            .then(function (caseDenyAccessTxt) {
                                expect(caseDenyAccessTxt).to.equal("Deny access to");
                                return driver.findElement(page.personFacet_page.elements.caseDenyAccess).click().then(function () {
                                    driver.sleep(800);
                                    driver.findElement(page.personFacet_page.elements.setDenyAccessToManager).sendKeys(USERNAME);//"Roald Sans Sigursson");
                                    driver.wait(until.elementsLocated(page.personFacet_page.elements.denyAccessSearchList), 10000);
                                    driver.sleep(1000);
                                    driver.findElement(page.personFacet_page.elements.selectDenyAccessManager).click();
                                    driver.sleep(1500);
                                    driver.wait(until.elementsLocated(page.personFacet_page.elements.denyAccessSelectedUserPill), 10000);
                                    //driver.sleep(1500);
                                    driver.findElement(page.personFacet_page.elements.confirmDenyButton).click();
                                    return driver.sleep(2000);
                                });
                            });
                    });
                });
        });
    },

    deniedAccessCheck: function () {
        driver.wait(until.elementsLocated(page.personFacet_page.elements.confidentialMessage), 15000);
        return driver.findElement(page.personFacet_page.elements.confidentialMessage).getText().then(function (confidentialMessageTxt) {
            return expect(confidentialMessageTxt).to.equal("This case has been marked as Confidential. Contact your System Administrator if you need to gain access.");
        });

    },

    caseConfidentialityAllowAccess: function (USERNAME) {
        driver.wait(until.elementsLocated(page.personFacet_page.elements.caseInfo), 15000);
        return driver.findElement(page.personFacet_page.elements.caseInfo).click().then(function () {
            driver.wait(until.elementsLocated(page.personFacet_page.elements.caseInfoAccess), 15000);
            // driver.sleep(3000);
            return driver.findElement(page.personFacet_page.elements.caseInfoAccess).getText().then(function (caseInfoAccessTxt) {
                expect(caseInfoAccessTxt).to.equal("Case information access")
                return driver.findElement(page.personFacet_page.elements.caseAllowAccess).click().then(function () {
                    return driver.findElement(page.personFacet_page.elements.caseAllowAccess).getText().then(function (caseAllowAccessTxt) {
                        expect(caseAllowAccessTxt).to.equal("Allow access to");
                        return driver.findElement(page.personFacet_page.elements.caseAllowAccess).click().then(function () {
                            driver.sleep(2000);
                            driver.findElement(page.personFacet_page.elements.setAllowAccessToManager).sendKeys(USERNAME);//.sendKeys("Roald  Sans Sigursson");
                            driver.sleep(2000);
                            driver.findElement(page.personFacet_page.elements.selectAllowAccessManager).click();
                            driver.sleep(1500);
                            driver.findElement(page.personFacet_page.elements.confirmAllowButton).click();
                            return driver.sleep(2000)
                        });
                    });
                });
            });
        });
    },

    navigateStrategyDiscussionJourney: function (FormName, Journey) {
        var count = 0;
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.strategyDiscussionJourney), 10000)
            .then(function () {
                //driver.sleep(3000);
                return helpers.gridGetElement(by.css('div[name="journey_section"]'), by.css('div[data-bind*="visible:blacklistedJourneys"] div[data-bind*="visible : $index"]'), FormName)
                    .then(function (cppBlock) {
                        /*var acctoggle = cppBlock.findElement(by.css('div.col-sm-1.arrow.pull-right'));
                        acctoggle.getAttribute('class').then(function (attrValue) {
                            console.log('\n\nattrValue : ', attrValue)
                            if (attrValue.includes('collapsed')) {
                                acctoggle.click();
                                console.log('Acc click');
                                driver.sleep(2000);
                            }
                        });*/
                        var desiredOption = null;
                        return cppBlock.findElements(page.personFacet_page.elements.journeyForms)
                            .then(function (options) {
                                console.log('options.length', options.length);
                                options.some(function (option) {
                                    if (FormName === 'Contact Record') {
                                        driver.executeScript("return $('.mCSB_container').animate({top: \"-60px\"});")
                                        driver.sleep(1000);
                                        //return driver.executeScript(" return $('#Medication').val();")
                                    }
                                    option.getText().then(function doesOptionMatch(text) {
                                        if (text.includes(FormName)) {
                                            console.log("FormName: ", FormName);
                                            desiredOption = option;
                                            count++;
                                        }
                                    });
                                });
                            }).then(function clickOption() {
                                if (desiredOption != null) {
                                    desiredOption.click();
                                    driver.sleep(5000);
                                    console.log('count: ', count);
                                    return count;
                                }
                            });
                    });
            });
    },

    verifyFormCount: function (count) {
        count = parseInt(count);
        return driver.findElements(page.personFacet_page.elements.journeyForms)
            .then(function (options) {
                console.log('options.length: ', options.length);
                expect(options.length).to.equal(count);
                return driver.sleep(100);
            });
    },

    verifyFinanceDetails: function () {
        driver.sleep(3000);
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.provision), 15000)
            .then(function () {
                driver.findElement(page.personFacet_page.elements.finance).getText().then(function (financeVal) {
                    expect(financeVal).to.equal("Finance");
                    return driver.findElement(page.personFacet_page.elements.budget).getText().then(function (budgetVal) {
                        expect(budgetVal).to.equal("Personal budget");
                        return driver.findElement(page.personFacet_page.elements.contributions).getText().then(function (contributionsVal) {
                            expect(contributionsVal).to.equal("Contributions");
                            return driver.findElement(page.personFacet_page.elements.provision).getText().then(function (provisionVal) {
                                return expect(provisionVal).to.equal("Provision");
                            });
                        });
                    });
                });
            });
    },

    personFacetPlansVerification: function () {
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.PlansLink), 25000, 'Plans link not visible')
            .then(function () {
                console.log('1')
                return driver.findElement(page.personFacet_page.elements.PlansLink).getText().then(function (PlansLinkTxt) {
                    console.log('PlansLinkTxt: ', PlansLinkTxt)
                    expect(PlansLinkTxt).to.equal("Plans");
                    return driver.findElement(page.personFacet_page.elements.PlansLink).click()
                        .then(function () {
                            return driver.sleep(2000).then(function () {
                                return driver.wait(until.elementsLocated(page.personFacet_page.elements.formsList), 25000);
                            });
                        });
                });
            });
    },

    checkEvent: function (EVENT) {
        console.log('EVENT : ', EVENT);
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.eventsWidgetBlock), 25000).then(function () {
            driver.sleep(3000);
            return driver.wait(until.elementsLocated(page.personFacet_page.elements.eventList), 20000).then(function () {
                return driver.findElement(page.personFacet_page.elements.eventsWidgetTitle).getText().then(function (WidgetTitle) {
                    console.log('WidgetTitle', WidgetTitle);
                    expect(WidgetTitle).to.contain('Events');
                }).then(function () {
                    return helpers.gridGetText(page.personFacet_page.elements.eventsWidgetBlock, page.personFacet_page.elements.eventsWidgetEventRow, EVENT)
                        .then(function (retEvent) {
                            console.log('retEvent', retEvent);
                            if (retEvent != undefined) {
                                return expect(retEvent).to.contain(EVENT);
                            }
                        }).then(function () {
                            return helpers.gridGetElement(page.personFacet_page.elements.eventsWidgetBlock, by.css('.row'), EVENT)
                                .then(function (EventRow) {

                                    EventRow.findElement(by.css('.event-wordwrap')).getText().then(function (eventText) {
                                        console.log('eventText : ', eventText);
                                        expect(eventText).to.contain(EVENT);
                                    });

                                    //if(EVENT.includes('Child in need plan ')){
                                    datenow = new Date();
                                    datenow = dateFormat(datenow, "dd/mm/yyyy");
                                    return EventRow.findElement(by.css('div[data-bind*="eventDate"]')).getText().then(function (eventDate) {
                                        console.log('eventDate : ', eventDate);
                                        expect(eventDate).to.contain(datenow);
                                    });
                                    //}
                                });
                        });
                });
            });
        });
    },

    checkEventNotVisible: function (EVENT) {
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.eventsWidgetBlock), 25000).then(function () {
            return driver.findElement(page.personFacet_page.elements.eventsWidgetTitle).getText().then(function (WidgetTitle) {
                // console.log('WidgetTitle', WidgetTitle);
                expect(WidgetTitle).to.contain('Events');
            }).then(function () {
                // console.log('checkEventNotVisible EVENT', EVENT);
                return helpers.gridGetText(page.personFacet_page.elements.eventsWidgetBlock, page.personFacet_page.elements.eventsWidgetEventRow, EVENT).then(function (retEvent) {
                    // console.log('checkEventNotVisible retEvent', retEvent);
                    if (retEvent != undefined) {
                        expect(retEvent).to.not.contain(EVENT);
                    } else { return true; }
                });
            });
        });
    },

    verifyGroupOnPersonFacet: function (groupName) {
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.relationShipWidget), 15000).then(function () {
            return driver.wait(until.elementsLocated(page.personFacet_page.elements.relationGroupSection), 15000).then(function () {
                return driver.findElement(page.personFacet_page.elements.groupPill).getText()
                    .then(function (groupPill) {
                        //console.log('groupPill : ', groupPill);
                        return expect(groupPill).to.contain(groupName);
                    });
            });
        });
    },

    formJourneyStatus: function (status) {
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.strategyDiscussionJourney), 10000).then(function () {
            var reqSpan = null;
            return driver.findElements(by.css('.process-item:nth-child(1) > div > div span.pull-right.m-r-sm'))
                .then(function (options) {
                    options.some(function (option) {
                        option.getAttribute('style')
                            .then(function (attrValue) {
                                //  console.log('\n\nattrValue : ', attrValue)
                                flag = attrValue.includes('display: none;');
                                if (flag != true) {
                                    reqSpan = option;
                                }
                            });
                    });
                }).then(function () {
                    return reqSpan.getText()
                        .then(function (spanText) {
                            //  console.log('spanText : ', spanText);
                            expect(spanText).to.contain(status);
                        });
                });
        });
    },

    mentalCapacityVerification: function () {
        driver.wait(until.elementsLocated(page.personFacet_page.elements.mentalCapacity), 25000);
        return driver.findElement(page.personFacet_page.elements.mentalCapacity).isDisplayed();
    },

    riskVerificationOnPersonFacet: function () {
        driver.wait(until.elementsLocated(page.personFacet_page.elements.riskName), 10000)
        return driver.findElement(page.personFacet_page.elements.riskName).getText().then(function (riskName) {
            var subStringRisk = riskName.substr(8, 19);
            return expect(subStringRisk).to.equal(config.personfacets.Risks.Title);
        });
    },

    mentalCapacitySafeguardingVerification: function () {
        driver.wait(until.elementsLocated(page.personFacet_page.elements.mentalCapacity), 25000)
        return driver.sleep(2000).then(function () {
            return helpers.gridGetText(page.personFacet_page.elements.mentalCapacityList, page.personFacet_page.elements.perticularMentalCapacity, 'Safeguarding')
                .then(function (SafeGuardingCapacityVisible) {
                    console.log("SafeGuardingCapacityVisible :", SafeGuardingCapacityVisible);
                    return expect(SafeGuardingCapacityVisible).to.equal("Safeguarding");
                });
        });
    },

    financeSafeguardingVerification: function () {
        driver.wait(until.elementsLocated(page.personFacet_page.elements.mentalCapacity), 25000)
        return driver.sleep(2000).then(function () {
            return helpers.gridGetText(page.personFacet_page.elements.mentalCapacityList, page.personFacet_page.elements.perticularMentalCapacity, 'Finance')
                .then(function (financeCapacityVisible) {
                    console.log("financeCapacityVisible:", financeCapacityVisible);
                    return expect(financeCapacityVisible).to.equal("Finance");
                });
        });
    },

    healthCapacitySafeguardingVerification: function () {
        driver.wait(until.elementsLocated(page.personFacet_page.elements.mentalCapacity), 25000)
        return driver.sleep(2000).then(function () {
            return helpers.gridGetText(page.personFacet_page.elements.mentalCapacityList, page.personFacet_page.elements.perticularMentalCapacity, 'Health')
                .then(function (healthCapacityVisible) {
                    console.log("3:", healthCapacityVisible);
                    return expect(healthCapacityVisible).to.equal("Health");
                });
        });
    },

    verifyEduCourseDetails: function () {
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.EduInstituteName), 10000).then(function () {
            return driver.findElement(page.personFacet_page.elements.EduInstituteName).getText().then(function (InstName) {
                expect(InstName).to.equal(config.Organisation.BasicInfo.NewName);
                return driver.findElement(page.personFacet_page.elements.courseLevel).getText().then(function (level) {
                    expect(level).to.equal('MBA');
                    return driver.findElement(page.personFacet_page.elements.EduCourse).getText().then(function (courseName) {
                        return expect(courseName).to.equal('Agriculture');
                    });
                });
            });
        });
    },

    verifyNotifEI: function (NOTIF) {
        /**essentioalInfoSection: by.css('div[name="essentialInfo-section"]'),
                essentialInfoNotifRow: by.css('div.row.m-b-sm'), */
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.essentioalInfoSection), 15000).then(function () {
            //console.log(1);
            return driver.wait(until.elementsLocated(page.personFacet_page.elements.essentialInfoNotifRow), 15000).then(function () {
                //console.log(2);
                return helpers.gridGetElement(page.personFacet_page.elements.essentioalInfoSection, page.personFacet_page.elements.essentialInfoNotifRow, NOTIF)
                    .then(function (EIROW) {
                        return EIROW.getText().then(function (EiRowText) {
                            return expect(EiRowText).to.include(NOTIF);
                        });
                    });
            });
        });
    },

    navigateToNeedsRisksStrengths: function () {
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.needsRisksStregnthsWidget), 10000).then(function () {
            driver.findElement(page.personFacet_page.elements.needsRisksStregnthsWidget).click();
            return driver.wait(until.elementsLocated(page.personFacet_page.elements.needsRisksStrengthList), 10000);
        });
    },

    navigateToContributions: function () {
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.contributions), 15000).then(function () {
            return driver.findElement(page.personFacet_page.elements.contributions).getText().then(function (contributionsVal) {
                expect(contributionsVal).to.equal("Contributions");
                return driver.findElement(page.personFacet_page.elements.contributionsMore).click().then(function () {
                    return driver.wait(until.elementsLocated(page.personFacet_page.elements.contributionsLabel), 15000).then(function () {
                        return driver.findElement(page.personFacet_page.elements.contributionsLabel).getText().then(function (ContriVal) {
                            return expect(ContriVal).to.equal("Contributions");
                        });
                    });
                });
            });
        });
    },

    verifyActivityDetails: function () {
        driver.wait(until.elementsLocated(page.personFacet_page.elements.activityLabel), 10000);
        return driver.findElement(page.personFacet_page.elements.activityLabel).getText().then(function (activityLabel) {
            expect(activityLabel).to.equal("Activity");
            return driver.findElement(page.personFacet_page.elements.activityLabel).click().then(function () {
                driver.wait(until.elementsLocated(page.personFacet_page.elements.exploreCaseLabel), 10000);
                return driver.findElement(page.personFacet_page.elements.exploreCaseLabel).getText().then(function (exploreCaseLabel) {
                    expect(exploreCaseLabel).to.equal("Explore this case");
                    driver.wait(until.elementsLocated(page.personFacet_page.elements.transferCaseLabel), 10000);
                    return driver.findElement(page.personFacet_page.elements.transferCaseLabel).getText().then(function (transferCaseLabel) {
                        expect(transferCaseLabel).to.equal("Transfer this case");
                        driver.wait(until.elementsLocated(page.personFacet_page.elements.closeCaseLabel), 10000);
                        return driver.findElement(page.personFacet_page.elements.closeCaseLabel).getText().then(function (closeCaseLabel) {
                            expect(closeCaseLabel).to.equal("Close this case");
                            driver.wait(until.elementsLocated(page.personFacet_page.elements.placementLabel), 10000);
                            return driver.findElement(page.personFacet_page.elements.placementLabel).getText().then(function (placementLabel) {
                                expect(placementLabel).to.equal("Arrange placement");
                                driver.findElement(page.personFacet_page.elements.exploreCaseLabel).click();
                                driver.wait(until.elementsLocated(page.personFacet_page.elements.activitiesLabel), 10000);
                                return driver.findElement(page.personFacet_page.elements.activitiesLabel).getText().then(function (activitiesLabel) {
                                    expect(activitiesLabel).to.equal("All activities");
                                    driver.wait(until.elementsLocated(page.personFacet_page.elements.summaryLabel), 10000);
                                    return driver.findElement(page.personFacet_page.elements.summaryLabel).getText().then(function (summaryLabel) {
                                        expect(summaryLabel).to.equal("Summary");
                                        driver.wait(until.elementsLocated(page.personFacet_page.elements.connectionsLabel), 10000);
                                        return driver.findElement(page.personFacet_page.elements.connectionsLabel).getText().then(function (connectionsLabel) {
                                            expect(connectionsLabel).to.equal("Connections");
                                            driver.wait(until.elementsLocated(page.personFacet_page.elements.needAndRiskLabel), 10000);
                                            return driver.findElement(page.personFacet_page.elements.needAndRiskLabel).getText().then(function (riskLabel) {
                                                return expect(riskLabel).to.equal("Needs and Risks");
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

    checkJourneys: function (Journey) {
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.journeyBlock), 25000)
            .then(function () {
                driver.wait(until.elementLocated(page.personFacet_page.elements.leavingCareProcess), 20000);
                return driver.findElement(page.personFacet_page.elements.leavingCareProcess).getText()
                    .then(function (process) {
                        expect(process).to.contain('Leaving Care Process');
                    })
                    .then(function () {
                        return helpers.gridGetText(page.personFacet_page.elements.journeyBlock, page.personFacet_page.elements.journeyProcessForm, Journey)
                    });
            });
    },

    leavingCareProcessStartAndDueDateVerification: function () {
        driver.sleep(500);
        driver.wait(until.elementLocated(page.personFacet_page.elements.leavingCareProcess), 20000);
        return driver.findElement(page.personFacet_page.elements.leavingCareProcess).getText()
            .then(function (process) {
                expect(process).to.contain('Leaving Care Process');
            })
            .then(function () {
                driver.wait(until.elementLocated(page.personFacet_page.elements.journeyProcessForm), 20000);
                return driver.findElement(page.personFacet_page.elements.journeyProcessForm).getText()
            })
            .then(function (form) {
                expect(form).to.contain('Leaving Care Assessment');
            })
            .then(function () {
                driver.wait(until.elementLocated(page.personFacet_page.elements.journeyProcessFormStatus), 20000);
                return driver.findElement(page.personFacet_page.elements.journeyProcessFormStatus).getText()
            })
            .then(function (formStatus) {
                expect(formStatus).to.contain('Started');
            })
            .then(function () {
                driver.wait(until.elementLocated(page.personFacet_page.elements.LCPStartDate), 20000)
                return driver.findElement(page.personFacet_page.elements.LCPStartDate).getText()
                    .then(function (LCPStartDate) {
                        var dateFormat = require('dateformat');
                        var date = new Date();
                        var currDate = date.getDate();
                        var currMnth = date.getMonth();
                        var currYear = date.getFullYear();
                        var formatDate = dateFormat(date, "dd/mm/yyyy");
                        expect(LCPStartDate).to.equal("Started on: " + formatDate);
                        return driver.wait(until.elementLocated(page.personFacet_page.elements.LCPDueDate), 20000).then(function () {
                            return driver.findElement(page.personFacet_page.elements.LCPDueDate).getText().then(function (LCPDueDate) {
                                var date2 = new Date();
                                date2.setDate(date2.getDate() + 25);
                                var formatDate = dateFormat(date2, "dd/mm/yyyy");
                                expect(LCPDueDate).to.equal("Due by: " + formatDate);
                                return driver.sleep(1500);
                            });
                        });
                    });
            });
    },

    caseOwnerInfo: function (caseOwner) {
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.caseOwnerDetails), 10000)
            .then(function () {
                return driver.findElement(page.personFacet_page.elements.caseOwnerDetails).getText()
                    .then(function (owner) {
                        text = owner.replace(/(?:\r\n|\r|\n)/g, '');
                        return expect(text).to.equal(caseOwner);
                    });
            });
    },

    navigateToContactArrangement: function () {
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.personBanner), 20000)
            .then(function () {
                return driver.wait(until.elementsLocated(page.personFacet_page.elements.personName), 20000)
                    .then(function () {
                        driver.sleep(2000);
                        return driver.wait(until.elementsLocated(page.personFacet_page.elements.educationWidget), 10000)
                            .then(function () {
                                return driver.findElement(page.personFacet_page.elements.contactArrangement).click()
                                    .then(function () {
                                        driver.wait(until.elementLocated(page.personFacet_page.elements.contactArrangements), 10000)
                                        return driver.sleep(1000);
                                    })
                            });
                    });
            });
    },

    verifyPrivateFostering: function (withPerson1, withPerson2) {
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.caseSummaryWidget), 8000, 'Case Summary did not Load').then(function () {
            return driver.wait(until.elementsLocated(page.personFacet_page.elements.privFosteringSec), 8000, 'Private Fostering section missing').then(function () {
                return driver.wait(until.elementsLocated(page.personFacet_page.elements.privFosteringSecTitle), 8000, 'Priv fostering title missing').then(function () {
                    return driver.findElement(page.personFacet_page.elements.privFosteringSecTitle).getText().then(function (privFosterTitle) {
                        expect(privFosterTitle).to.contain('Private fostering');
                        return driver.wait(until.elementLocated(page.personFacet_page.elements.privFosteringSecData), 10000, 'Priv Fostering Inner details Missing').then(function (privFosteringSecElement) {
                            return privFosteringSecElement.findElements(by.css('a'))
                                .then(function (options) {
                                    return options[0].getText().then(function (privFoster1Name) {
                                        expect(privFoster1Name).to.equal(withPerson1);
                                    }).then(function () {
                                        return options[1].getText().then(function (privFoster2Name) {
                                            expect(privFoster2Name).to.equal(withPerson2);
                                        })
                                    })
                                })
                        })
                    })
                });
            });
        });
    },

    verifyTrainingDetails: function () {
        driver.wait(until.elementsLocated(page.personFacet_page.elements.EduTrainingName), 10000)
        return driver.findElement(page.personFacet_page.elements.EduTrainingName).getText().then(function (TrainingName) {
            return expect(TrainingName).to.equal("Training");
        })
            .then(function () {
                driver.wait(until.elementsLocated(page.personFacet_page.elements.TrainingMoreLnk), 10000)
                driver.findElement(page.personFacet_page.elements.TrainingMoreLnk).click();
                return driver.sleep(2000)
            })
            .then(function () {
                driver.wait(until.elementLocated(page.personFacet_page.elements.TrainingLableInEdu), 10000);
                return driver.findElement(page.personFacet_page.elements.TrainingLableInEdu).getText().then(function (spanText) {
                    expect(spanText).to.equal("Training");
                    return driver.sleep(1000);
                })
            })
    },

    caseOwnerInfoOne: function (caseOwner) {
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.caseOwnerDetailsOne), 10000).then(function () {
            return driver.findElement(page.personFacet_page.elements.caseOwnerDetailsOne).getText().then(function (owner) {
                text = owner.replace(/(?:\r\n|\r|\n)/g, '');
                return expect(text).to.equal(caseOwner);
            });
        });
    },

    navigateToWidget: function (widgetName) {
        console.log("widgetName : ", widgetName);
        return driver.wait(until.elementLocated(page.personFacet_page.elements.widgetContainer), 10000).then(function () {
            return helpers.clickIncludesGrid(page.personFacet_page.elements.widgetContainer, page.personFacet_page.elements.widgetTitle, widgetName).then(function () {
                return driver.sleep(5000);
            });
        });
    },

    openProcess: function (processName) {
        console.log("ProcessName", processName);
        return driver.wait(until.elementLocated(page.personFacet_page.elements.journeyContainer), 1000).then(function (options) {
            return helpers.gridGetElement(page.personFacet_page.elements.journeyContainer, page.personFacet_page.elements.JourneyBlk, processName).then(function (selectedProcess) {
                return selectedProcess.findElement(page.personFacet_page.elements.journeyAccodian).click().then(function () {
                    return driver.sleep(3000);
                });
            });
        });
    },

    clickOnAddFormORPlanButton: function (processName) {
        driver.wait(until.elementLocated(page.personFacet_page.elements.addFormOrPlanButton), 1000);
        return driver.findElement(page.personFacet_page.elements.addFormOrPlanButton).click().then(function () {
            return driver.wait(until.elementIsVisible(driver.findElement(page.personFacet_page.elements.selectFormOrPlanDropdown)), 10000, "Select Form or Plan did not appear")
                .then(function () {
                    return helpers.clickIncludesList(page.personFacet_page.elements.dropDownList, 'button', page.personFacet_page.elements.elementFromDropDownList, "Case Closure Request").then(function () {
                        driver.findElement(page.personFacet_page.elements.tickIcon).click().then(function () {
                            return driver.sleep(500).then(function () {
                                helpers.scrollIntoView(driver.findElement(page.personFacet_page.elements.deleteIcon));
                                // return driver.findElement(page.personFacet_page.elements.scrollBar).then(function (dragger1) {
                                //     driver.actions().mouseMove(dragger1).perform();
                                driver.sleep(500);
                                //     driver.actions().dragAndDrop(dragger1, { x: 0, y: 100 }).perform();
                                //     driver.sleep(1500);
                                return driver.findElement(page.personFacet_page.elements.deleteIcon).click();
                                //     return driver.sleep(1000);
                                // });                                
                            });
                        });
                    });
                });
        });
    },

    clickOnScrollBar: function () {
        driver.wait(until.elementLocated(page.personFacet_page.elements.scrollBar), 1000);
        return driver.findElement(page.personFacet_page.elements.scrollBar).then(function (dragger1) {
            driver.actions().mouseMove(dragger1).perform();
            driver.sleep(1000);
            driver.actions().dragAndDrop(dragger1, { x: 0, y: 100 }).perform();
            driver.sleep(1500);
            driver.findElement(page.personFacet_page.elements.deleteIcon).click();
            return driver.sleep(1000);
        });
    },


    clickOnRemoveButton: function (processName) {
        driver.wait(until.elementLocated(page.personFacet_page.elements.scrollBar), 1000);
        return driver.sleep(500).then(function () {
            return driver.findElement(page.personFacet_page.elements.scrollBar).then(function (dragger1) {
                driver.actions().mouseMove(dragger1).perform();
                driver.sleep(1000);
                driver.actions().dragAndDrop(dragger1, { x: 0, y: 100 }).perform();
                driver.sleep(1500);
                driver.findElement(page.personFacet_page.elements.deleteIcon).click();
                return driver.sleep(1000);
            });
        });

    },

    clickToSaveForm: function () {
        driver.wait(until.elementLocated(page.personFacet_page.elements.tickIcon), 1000);
        driver.findElement(page.personFacet_page.elements.tickIcon).click();
        return driver.sleep(500);

    },


    validatePersonIdOnBanner: function (maxLength) {
        return driver.wait(until.elementLocated(page.personFacet_page.elements.personId), 20000, "Person id is not located")
            .then(function () {
                return driver.wait(until.elementIsVisible(driver.findElement(page.personFacet_page.elements.personId)), 5000, "personId not displayed").then(function (personIdElement) {
                    return personIdElement.getText().then(function (idText) {
                        return expect(idText.length).to.equal(parseInt(maxLength));
                    })
                })
            });
    },

    clickEditIcon: function () {
        return driver.wait(until.elementLocated(page.personFacet_page.elements.editIcon), 15000, "Edit Icon is not located")
            .then(function () {
                driver.findElement(page.personFacet_page.elements.editIcon).click();
                return driver.wait(until.elementLocated(page.personFacet_page.elements.editPersonPageTitle), 10000, "editPersonPageTitle is not located")
                    .then(function () {
                        driver.findElement(page.personFacet_page.elements.editPersonPageTitle).getText().then(function (title) {
                            return expect(title).to.equal("Edit person profile");
                        })
                    })
            });
    },
    clickOnDropdown: function (formPlanName) {
        driver.wait(until.elementLocated(page.personFacet_page.elements.addFormOrPlanButton), 1000);
        return driver.findElement(page.personFacet_page.elements.addFormOrPlanButton).click().then(function () {
            return driver.wait(until.elementIsVisible(driver.findElement(page.personFacet_page.elements.selectFormOrPlanDropdown)), 10000, "Select Form or Plan did not appear")
                .then(function () {
                    return helpers.clickIncludesList(page.personFacet_page.elements.dropDownList, 'button', page.personFacet_page.elements.elementFromDropDownList, formPlanName).then(function () {
                        driver.sleep(1000);
                    });
                });
        });
    },

    clickOnCrossIcon: function () {
        driver.sleep(1000);
        driver.wait(until.elementLocated(page.personFacet_page.elements.crossIcon), 1000);
        return driver.findElement(page.personFacet_page.elements.crossIcon).click().then(function () {
            return driver.wait(until.elementsLocated(page.personFacet_page.elements.dropDown), 10000).then(function () {
                driver.findElement(page.personFacet_page.elements.dropDown).getText().then(function (emptyString) {
                    return expect(emptyString).to.contain('Please choose');
                });
            });

        });
    },

    clickOnDuplicateIcon: function () {
        driver.wait(until.elementsLocated(page.personFacet_page.elements.duplicateIconOnToolbar), 5000, "duplicateIcon not located").then(function () {
            return driver.findElement(page.personFacet_page.elements.duplicateIconOnToolbar).click();
        });
    },

    getPersonAge: function () {
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.ageOnBanner), 5000, "duplicateIcon not located").then(function () {
            return driver.findElement(page.personFacet_page.elements.ageOnBanner).getText().then(function (ageText) {
                age = ageText.split("(")[1].split(" ")[0];
                console.log("Age: ", age);
                return parseInt(age);
            });
        });
    },

    clickAndVerifyPrivFostCarer: function (pillNumber, withPerson) {
        // console.log("pillNumber: ", pillNumber);
        // console.log("withPerson: ", withPerson);
        return driver.wait(until.elementLocated(page.personFacet_page.elements.privFosteringSecData), 10000, 'Priv Fostering Inner details Missing').then(function (privFosteringSecElement) {
            return privFosteringSecElement.findElements(by.css('a'))
                .then(function (options) {
                    options[pillNumber - 1].getText()
                        .then(function (privFosterName) {
                            // console.log("privFosterName: ", privFosterName);
                            expect(privFosterName).to.equal(withPerson);
                        })
                        .then(function () {
                            options[pillNumber - 1].click().then(function () {
                                driver.sleep(1000);
                            });
                        })
                        .then(function () {
                            driver.wait(until.elementsLocated(page.personFacet_page.elements.personName), 20000).then(function () {
                                driver.findElement(page.personFacet_page.elements.personName).getText()
                                    .then(function (personNameText) {
                                        expect(withPerson).to.equal(personNameText);
                                        // console.log("Matched PF Name: ", withPerson, " with person Name: ", personNameText);
                                        return driver.sleep(1100);
                                    });
                            });
                        });
                });
        });
    },

    verifyWidgetPresence: function (widgetName) {
        let desiredOption;
        return driver.wait(until.elementLocated(page.personFacet_page.elements.widgetsOnPage), 5000).then(function () {
            return driver.findElements(page.personFacet_page.elements.widgetsOnPage)
                .then(function (options) {
                    options.some(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                            if (text === widgetName) {
                                // console.log("\n\nMatched:" + widgetName + "\nValue : " + text);
                                desiredOption = option;
                            }
                        });
                    });
                })
                .then(function () {
                    assert.isDefined(desiredOption, "No element found with matching text: " + widgetName);
                    helpers.scrollIntoView(desiredOption);
                    return desiredOption.findElement(by.css('a')).click().then(function () {
                        return driver.wait(until.elementLocated(by.css('h2.page-title')), 5000).then(function () {
                            return driver.findElement(by.css('h2.page-title')).getText().then(function (pageHeading) {
                                return expect(pageHeading).to.equal(widgetName);
                            })
                        });
                    });
                });
        });
    },

    verifyConnectedPillPersonFacet: function (personName, relation) {
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.relationShipWidget), 15000)
            .then(function () {
                return driver.wait(until.elementsLocated(page.personFacet_page.elements.connectionNameOnPill), 5000).then(function (conns) {
                    return helpers.returnElemPosition(conns, 0, personName)
                        .then(function (position) {
                            return conns[position].getText()
                                .then(function (connectionPillText) {
                                    expect(connectionPillText).to.equal(personName);
                                    return position;
                                });
                        });
                });
            })
            .then(function (pos) {
                return driver.wait(until.elementsLocated(page.personFacet_page.elements.connectionRelationOnPill), 5000).then(function (connRelations) {
                    return connRelations[pos].getText()
                        .then(function (relationText) {
                            return expect(relationText).to.equal(relation);
                        });
                });
            });
    },
    verifyCaseOwner: function (caseOwner) {
        return driver.findElements(page.personFacet_page.elements.caseOwnerLabel).then(function (element) {
            return element[0].getText().then(function (text) {
                return expect(text).to.equal(caseOwner);
            });
        });
    },

    clickAndVerifyConnection: function (fromPerson, withPerson) {
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.connectionNameOnPill), 5000)
            .then(function (connNamePills) {
                return helpers.returnElemPosition(connNamePills, 0, withPerson)
                    .then(function (pos) {
                        connNamePills[pos].getText()
                            .then(function (connNameText) {
                                console.log("From connNameText:", connNameText);
                                expect(connNameText).to.equal(withPerson);
                            })
                            .then(function () {
                                connNamePills[pos].click().then(function () {
                                    console.log(withPerson, "pill clicked.");
                                    driver.sleep(1000);
                                });
                            });
                    });
            })
            .then(function () {
                return driver.wait(until.elementsLocated(page.personFacet_page.elements.personName), 20000).then(function () {
                    return driver.findElement(page.personFacet_page.elements.personName).getText()
                        .then(function (personNameText) {
                            return expect(withPerson).to.equal(personNameText);
                            // console.log("Matched Conn Name: ", withPerson, " with person Name: ", personNameText);
                        });
                }).then(function () {
                    return driver.wait(until.elementsLocated(page.personFacet_page.elements.connectionNameOnPill), 5000).then(function (connNamePills) {
                        return helpers.returnElemPosition(connNamePills, 0, fromPerson).then(function (pos) {
                            connNamePills[pos].getText()
                                .then(function (connNameText) {
                                    console.log("With connNameText:", connNameText);
                                    expect(connNameText).to.equal(fromPerson);
                                })
                        });
                    });
                });
            });
    },

    verifyPrivFostNotPresent: function () {
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.caseSummaryWidget), 8000, 'Case Summary did not Load').then(function () {
            return driver.findElements(page.personFacet_page.elements.privFosteringSec).then(function (elements) {
                if (elements.length > 0) {
                    assert.fail("Private fosters should not be shown");
                } else {
                    console.log("As expected, Private fosters are not shown");
                }
            });
        });
    },

    verifyMissingTextAndIcon: function () {
        return driver.wait(until.elementLocated(page.personFacet_page.elements.missngTextOnPersonBanner), 5000, 'Missing text not located').then(function (missingTextElem) {
            return missingTextElem.getText().then(function (missingText) {
                expect(missingText).to.equal("Missing");
            }).then(function () {
                return driver.wait(until.elementLocated(page.personFacet_page.elements.missngIconOnPersonBanner), 3000, 'Missing Icon not located').then(function (missingIconElem) {
                    return missingIconElem.isDisplayed();
                });
            });
        });
    },

    checkEventWithDate: function (event, dateToMatch) {
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.eventsWidgetBlock), 25000).then(function () {
            driver.sleep(3000);
            return driver.wait(until.elementsLocated(page.personFacet_page.elements.eventList), 20000).then(function () {
                return driver.findElement(page.personFacet_page.elements.eventsWidgetTitle).getText().then(function (widgetTitle) {
                    console.log('widgetTitle::', widgetTitle);
                    expect(widgetTitle).to.equal('Events');
                }).then(function () {
                    return helpers.gridGetText(page.personFacet_page.elements.eventsWidgetBlock, page.personFacet_page.elements.eventsWidgetEventRow, event)
                        .then(function (retEvent) {
                            console.log("retEvent::", retEvent);
                            if (retEvent != undefined) {
                                return expect(retEvent).to.equal(event);
                            }
                        }).then(function () {
                            return helpers.gridGetElement(page.personFacet_page.elements.eventsWidgetBlock, by.css('.row'), event)
                                .then(function (eventRow) {
                                    return eventRow.findElement(by.css('div[data-bind*="eventDate"]')).getText().then(function (eventDate) {
                                        console.log("eventDate::", eventDate);
                                        expect(eventDate).to.equal(dateToMatch);
                                    });
                                    //}
                                });
                        });
                });
            });
        });
    },

    eventsNavigation: function () {
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.eventsWidgetBlock), 10000)
            .then(function () {
                return driver.findElement(page.personFacet_page.elements.eventsWidgetTitleLink).click().then(function () {
                    return driver.wait(until.elementLocated(page.personFacet_page.elements.eventsPageSection), 15000, "Events page not shown")
                        .then(element => {
                            return driver.wait(until.elementIsVisible(element), 10000, "Events page section is not visible");
                        });
                });
            });
    },
}