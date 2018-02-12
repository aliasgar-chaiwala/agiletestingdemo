module.exports = {

    elements: {
        formSA: by.css('[aria-label="Single Assessment"]'),
        nextStep: by.css('[aria-controls="next step"]'),
        chooseList: by.css('.tab-pane.active.tab-pane-validation .btn.btn-dropdown-link.dropdown-toggle'),
        chooseConference: by.css('[name="Other-Conference"]'),
        nextStepPerson: by.css('.tab-pane.active.tab-pane-validation .selectize-input.items.not-full.has-options.has-items .person-tag-base'),
        chooseTeam: by.css('input[placeholder="Search team..."]'),
        setTeam: by.css('div[data-value="Me"]'), //('div.selectize-dropdown.multi.form-fields.plugin-remove_button .selectize-dropdown-content .option'),
        choosePriority: by.css('#dropdownMenu1 > strong'),
        setPriority: by.css('li div .col-sm-9 li:nth-child(1) a'),
        //chooseActionButton: by.css('.btn-group.dropup.btn-group-xs.panel-action-btn.pull-right > button[type="submit"]'),
        chooseActionButton: by.css('#btn-submit'),
        //setSubmitForApproval: by.css('#maincontent div.form-group.btn-group.dropup.btn-group-xs.panel-action-btn.pull-right.open > ul > li:nth-child(2) > a'),
        setSubmitForApproval: by.css('#action-caret'),
        formsList: by.css('[class="table table-hover"] tbody'),
        NameRow: by.css('tr'),
        Name: by.css('td'),
        formStatus: by.css('#maincontent div.form-group.btn-group.dropup.btn-group-xs.panel-action-btn.pull-right.open > ul > li:nth-child(2) > a'),
        approveButton: by.css('ul.dropdown-menu li a[name="approve"]'),
        submitButton: by.css('.panel-action-btn .dropdown-menu li a[data-bind*="onSaveAndApprove"][name="submit"]'),

        rejectButton: by.css('ul.dropdown-menu li a[name="reject"]'),
        rejectComment: by.css('#textbox_27'),
        //----------------------------------------
        AssessmentDetailsComponent: by.css('div[name="Assessment Details"]'),
        AssessmentDetailsAccord: by.css('div[name="Assessment Details"] a.accordion-toggle.pull-right'),
        /* Assessment Details start date component is removed form single assessment form */
        // AssessmentDetailsStartDate: by.css('[aria-label="Assessment start date"] input'),
        AssessmentDetailsReason: by.css('#textbox_43'),
        /*Reason for delay compomnent is removed form single assessmnet form. */
        //reasonForDelayAssDetails: by.css('.reasonfordelay button'),
        // childNotEngage: by.css('li[role="reasonForDelay"]:nth-child(1) > a > span:nth-child(2)'),

        //-----------------------------------------
        // assessmentToggle: by.css('#maincontent [name="Assessment Details"] a.accordion-toggle.pull-right'),
        // assessmentStartDate: by.css('[aria-label="Assessment start date"] .form-fields.datetime.dateonlypicker'), //---------------duplicate of below AssessmentDetailsStartDate
        FactorsIdentifiedComponent: by.css('div[name="Factors identified at the end of assessment"]'),
        FactorsIdentifiedAccord: by.css('a.accordion-toggle.pull-right'),
        FiThisisDD: by.css('#maincontent > div > div > div > div.event-form > div > div > div.row > div:nth-child(6) > div > div > div > div > div > div.panel-heading > div > div.col-sm-1 > div > a'),
        FiThisisDDList: by.css('div.panel-collapse.in.collapse ul.dropdown-menu li[role="thisIsFor"]'),
        FiThisisDDListItem: by.css('a'),

        FiAssessmentCategoriesLabel: by.css('div.indentation .row .control-label'),
        FiAssessmentCategoriesDD: by.css('div.indentation .row .dropdown button#assessmentCat'),
        FiAssessmentCategoriesDDList: by.css('.dropdown.open ul[name="assessment-categories"]'),
        FiAssessmentCategoriesDDListItem: by.css('li a'),

        FIAssessmentFactorsLabel: by.css('div.indentation div.row:nth-child(2) label.control-label'),
        FIAssessmentFactorsList: by.css('ul[name="assessment-factors"]'),
        FIAssessmentFactorsListItem: by.css('li a[data-bind*="selectAssessmentFactor"]'),
        FIAssessmentFactorsSelectedTick: by.css('span.icon-selected.icon-tick'),
        FIAssessmentFactorsSelectedCount: by.css('label[data-bind*="getSelectedFactorsCount"]'),

        FIAssessmentFactorOtherLbl: by.css('label[for="txtOther"]'),
        FIAssessmentFactorOtherText: by.css('textarea#txtOther'),
        AuthRejectDate: by.css('[aria-label ="Authorisation Date"] input'),
        discardButton: by.css('[name="discard"]'),
        reviewButton: by.css('ul.dropdown-menu li a[data-bind*="click: reviewRequest"]'),
        authoDate: by.css('.authorizationdate i'),
        internalReviewDate: by.css('div[aria-label="Internal review date"] input'),
        reasonforassement: by.css('div[data-bind*="Reason for assessment"] textarea'),
        nextStageDropDown: by.css('#nextStepPanel div.row.m-b-sm div.col-sm-10 div.dropdown button'),
        nextStageDropDownButtonDiv: by.css('#nextStepPanel div.row.m-b-sm div.col-sm-10 div.dropdown'),
        nextStepsList: by.css('.btn.btn-dropdown.dropdown-toggle.form-group'),
        chooseTeam1: by.css('[data-view*="nextSteps"] [id="nextstep/action"]:nth-child(1) input'),
        chooseTeam2: by.css('[data-view*="nextSteps"] [id="nextstep/action"]:nth-child(2) input'),
        setTeam1: by.css('[data-view*="nextSteps"] [id="nextstep/action"]:nth-child(1) .selectize-dropdown-content > div:nth-child(1)'),
        setTeam2: by.css('[data-view*="nextSteps"] [id="nextstep/action"]:nth-child(2) .selectize-dropdown-content > div:nth-child(1)')
    },

    verifySingleAssessment: function () {
        page.pageHead.singleAssessmentFormNavigation();
        driver.wait(until.elementsLocated(page.singleAssessment_page.elements.formSA), 25000);
        driver.findElement(page.singleAssessment_page.elements.formSA).getText().then(function (text) {
            expect(text).to.equal("Single Assessment");
            return driver.sleep(100);
        })
    },

    fillAssDetailsSingleAssessMent: function () {
        return driver.wait(until.elementsLocated(page.singleAssessment_page.elements.AssessmentDetailsAccord), 25000)
            .then(function () {
                return driver.findElement(page.singleAssessment_page.elements.internalReviewDate).click().then(function () {
                    return driver.findElement(page.singleAssessment_page.elements.reasonforassement).click().then(function () {
                        return driver.findElement(page.singleAssessment_page.elements.reasonforassement).sendKeys("Test Reason for Assessment details ").then(function () {
                            return driver.sleep(2000);
                        });
                    });
                });
            });
    },

    fillReasonAssDetailsSingleAssessMent: function () {
        // driver.wait(until.elementsLocated(page.singleAssessment_page.elements.AssessmentDetailsReason), 75000) ;
        return driver.sleep(1000).then(function () {
            /*Reason for delay compomnent is removed form single assessmnet form. */
            //return driver.findElement(page.singleAssessment_page.elements.reasonForDelayAssDetails).click()  
            // return driver.findElement(page.singleAssessment_page.elements.childNotEngage).click()
            //  .then(function () {
            //  driver.findElement(page.singleAssessment_page.elements.AssessmentDetailsReason).sendKeys('Single Assessment Reason');
            return driver.findElement(page.singleAssessment_page.elements.AssessmentDetailsAccord).click();
            //});
        })
    },

    verifyRejectDate: function () {
        driver.wait(until.elementsLocated(page.singleAssessment_page.elements.AuthRejectDate), 10000)
        return driver.executeScript(" return $('[aria-label=\"Authorisation Date\"] [id=\"reusableDatepicker\"]').val();")
            .then(function (retDate) {

                var dateFormat = require('dateformat');
                var date = new Date();
                var currDate = date.getDate();
                var currMnth = date.getMonth();
                var currYear = date.getFullYear();
                var formatDate = dateFormat(date, "dd/mm/yyyy");
                console.log(formatDate);
                console.log(retDate);

                return expect(retDate).to.equal(formatDate);

            })
    },

    fillFactorsIdentifiedAssessMent: function (Category, Factor) {
        /**FactorsIdentifiedComponent: by.css('div[name="Factors identified at the end of assessment"]'),
        FactorsIdentifiedAccord: by.css('a.accordion-toggle.pull-right'),
        FiThisisDD: by.css('div.panel-collapse.in.collapse button.btn.btn-dropdown.dropdown-toggle'),
        FiThisisDDList: by.css('div.panel-collapse.in.collapse ul.dropdown-menu li[role="thisIsFor"]'),
        FiThisisDDListItem: by.css('a'),

        FiAssessmentCategoriesLabel: by.css('div.indentation .row .control-label'),
        FiAssessmentCategoriesDD: by.css('div.indentation .row .dropdown button#assessmentCat'),
        FiAssessmentCategoriesDDList: by.css('.dropdown.open ul[name="assessment-categories"]'),
        FiAssessmentCategoriesDDListItem: by.css('li a'),

        FIAssessmentFactorsLabel: by.css('div[name="Factors identified at the end of assessment"]'),
        FIAssessmentFactorsList: by.css('ul[name="assessment-factors"]'),
        FIAssessmentFactorsListItem: by.css('li a[data-bind*="selectAssessmentFactor"]'),
        FIAssessmentFactorsSelectedTick: by.css('span.icon-selected.icon-tick'),
        FIAssessmentFactorsSelectedCount: by.css('label[data-bind*="getSelectedFactorsCount"]'),

        FIAssessmentFactorOtherLbl: by.css('label[for="txtOther"]'),
        FIAssessmentFactorOtherText: by.css('textarea#txtOther'), */
        driver.executeScript('return window.scrollTo(' + 400 + ',' + 400 + ');')
        return driver.wait(until.elementsLocated(page.singleAssessment_page.elements.FactorsIdentifiedComponent), 25000).then(function () {
            return driver.findElement(page.singleAssessment_page.elements.FactorsIdentifiedComponent).then(function (FactorsIdentifiedBlock) {
                FactorsIdentifiedBlock.findElement(page.singleAssessment_page.elements.FactorsIdentifiedAccord).click();
                driver.wait(until.elementsLocated(page.singleAssessment_page.elements.FiThisisDD), 10000);
                driver.findElement(page.singleAssessment_page.elements.FiThisisDD).click();
                return driver.wait(until.elementsLocated(page.singleAssessment_page.elements.FiThisisDDList), 10000)
                    .then(function () {
                        driver.wait(until.elementsLocated(page.singleAssessment_page.elements.FiAssessmentCategoriesLabel), 7000);
                        driver.findElement(page.singleAssessment_page.elements.FiAssessmentCategoriesLabel).getText().then(function (label) {
                            expect(label).to.contain('Assessment categories');
                        });
                        driver.wait(until.elementsLocated(page.singleAssessment_page.elements.FiAssessmentCategoriesDD), 7000);
                        driver.findElement(page.singleAssessment_page.elements.FiAssessmentCategoriesDD).click();
                        driver.wait(until.elementsLocated(page.singleAssessment_page.elements.FiAssessmentCategoriesDDList), 7000);
                        return helpers.clickIncludesGrid(page.singleAssessment_page.elements.FiAssessmentCategoriesDDList, page.singleAssessment_page.elements.FiAssessmentCategoriesDDListItem, Category)
                            .then(function () {
                                driver.wait(until.elementsLocated(page.singleAssessment_page.elements.FIAssessmentFactorsLabel), 7000);
                                driver.findElement(page.singleAssessment_page.elements.FIAssessmentFactorsLabel).getText().then(function (label) {
                                    console.log("label : ", label);
                                    expect(label).to.contain('Assessment factors');
                                });
                                driver.wait(until.elementsLocated(page.singleAssessment_page.elements.FIAssessmentFactorsList), 7000);
                                return driver.findElement(page.singleAssessment_page.elements.FIAssessmentFactorsList).then(function (AFlist) {
                                    console.log(4);
                                    var desiredItem = null;
                                    return AFlist.findElements(page.singleAssessment_page.elements.FIAssessmentFactorsListItem).then(function (AFItems) {
                                        AFItems.some(function (option) {
                                            option.getText().then(function doesOptionMatch(text) {
                                                console.log("Option:", text);
                                                console.log("Factor:", Factor);
                                                if (text.includes(Factor)) {
                                                    console.log("matched:" + Factor + "\nValue : " + text);
                                                    desiredItem = option;
                                                }
                                            });
                                        });
                                    }).then(function () {
                                        desiredItem.click();
                                        driver.findElement(page.singleAssessment_page.elements.FIAssessmentFactorsSelectedCount).getText().then(function (countText) {
                                            console.log("countText : ", countText);
                                            expect(countText).to.contain('assessment factor selected');
                                            return FactorsIdentifiedBlock.findElement(page.singleAssessment_page.elements.FactorsIdentifiedAccord).click();
                                        });
                                    });
                                });
                            });
                    });
            });
        });
    },

    setNextStepWithTeam: function () {
        driver.wait(until.elementsLocated(page.singleAssessment_page.elements.nextStep), 25000);
        assert(driver.findElement(page.singleAssessment_page.elements.nextStep).getText(), "Next Step");
        //	driver.sleep(2000);
        return driver.findElement(page.singleAssessment_page.elements.nextStep).click()
            .then(function () {
                driver.findElement(page.singleAssessment_page.elements.chooseList).click();
                driver.sleep(1000);
                return driver.findElement(page.singleAssessment_page.elements.chooseConference).click()
            })
            .then(function () {
                driver.sleep(1500);
                driver.findElement(page.singleAssessment_page.elements.chooseTeam).sendKeys("Me");
                driver.sleep(2000);
                return driver.findElement(page.singleAssessment_page.elements.setTeam).click();
                //	driver.sleep(2000);
                //	driver.findElement(page.singleAssessment_page.elements.choosePriority).click();
                //	driver.sleep(2000);
                //		driver.findElement(page.singleAssessment_page.elements.setPriority).click()
            })
    },

    SubmitForm: function () {
        driver.sleep(500);
        return driver.wait(until.elementLocated(page.singleAssessment_page.elements.chooseActionButton), 25000)
            .then(function (chooseActnBtn) {
                return helpers.scrollIntoView(chooseActnBtn).then(function () {
                    return chooseActnBtn.click().then(function () {
                        return driver.wait(until.elementLocated(page.singleAssessment_page.elements.submitButton), 25000)
                    });
                });
            })
            .then(function (submitBtn) {
                return helpers.scrollIntoView(submitBtn).then(function () {
                    return submitBtn.click().then(function () {
                        return driver.sleep(1500);
                    });
                });
            });
    },

    managerApproval: function () {
        driver.sleep(2000);
        return driver.wait(until.elementsLocated(page.singleAssessment_page.elements.chooseActionButton), 25000).then(function () {
            return driver.executeScript('return window.scrollTo(' + 1500 + ',' + 1500 + ');').then(function () {
                driver.sleep(1000);

                var dateFormat = require('dateformat');
                var date = new Date();
                var currDate = date.getDate();
                var currMnth = date.getMonth();
                var currYear = date.getFullYear();
                var formatDate = dateFormat(date, "dd/mm/yyyy");

                console.log("formated date" + formatDate);
                driver.sleep(2000);
                driver.wait(until.elementsLocated(page.singleAssessment_page.elements.authoDate), 25000, "Authorisation date icon missing");
                driver.findElement(page.singleAssessment_page.elements.authoDate).click();
                driver.sleep(3000);
                helpers.gridClickDate('cur', currDate);
                driver.sleep(3000);

                // driver.findElement(page.singleAssessment_page.elements.AuthRejectDate).sendKeys("26/07/2017");

                return driver.findElement(page.singleAssessment_page.elements.chooseActionButton).click()
                    .then(function () {
                        driver.wait(until.elementsLocated(page.singleAssessment_page.elements.approveButton), 25000);
                        driver.findElement(page.singleAssessment_page.elements.approveButton).click();
                        return driver.sleep(2000)
                    });
            });
        });
    },

    managerReject: function () {
        driver.sleep(2000);
        driver.wait(until.elementsLocated(page.singleAssessment_page.elements.chooseActionButton), 25000);
        driver.findElement(page.singleAssessment_page.elements.rejectComment).sendKeys('Reject');
        driver.findElement(page.singleAssessment_page.elements.AuthRejectDate).sendKeys("26/10/2017");
        return driver.findElement(page.singleAssessment_page.elements.chooseActionButton).click()
            .then(function () {
                driver.wait(until.elementsLocated(page.singleAssessment_page.elements.rejectButton), 25000);
                driver.findElement(page.singleAssessment_page.elements.rejectButton).click();
                return driver.sleep(2000)
            });
    },

    managerSubmitForm: function () {
        driver.sleep(500);
        return driver.wait(until.elementsLocated(page.referral_page.elements.autorizationDateIcon), 2000, "Authorisation/Rejection Date is not located").then(function () {
            return driver.findElement(page.referral_page.elements.autorizationDateIcon).click().then(function () {
                var today = new Date();
                var dd = today.getDate() + 1;
                return helpers.gridClickDate('curr', dd).then(function () {
                    driver.sleep(500);
                    driver.wait(until.elementsLocated(page.singleAssessment_page.elements.chooseActionButton), 25000);
                    return driver.findElement(page.singleAssessment_page.elements.chooseActionButton).click().then(function () {
                        driver.executeScript('return window.scrollTo(' + 1500 + ',' + 1500 + ');');
                        driver.wait(until.elementsLocated(page.singleAssessment_page.elements.submitButton), 25000);
                        driver.findElement(page.singleAssessment_page.elements.submitButton).click();
                        return driver.sleep(5000);
                    })
                })
            })
        })
    },
    setAuthorizationandSubmit: function () {
        return driver.wait(until.elementsLocated(page.referral_page.elements.autorizationDateIcon), 2000, "Authorisation/Rejection Date is not located")
            .then(function () {
                driver.findElement(page.referral_page.elements.autorizationDateIcon).click()
                driver.sleep(500);
                driver.wait(until.elementsLocated(page.singleAssessment_page.elements.chooseActionButton), 25000);
                return driver.findElement(page.singleAssessment_page.elements.chooseActionButton).click().then(function () {
                    driver.executeScript('return window.scrollTo(' + 1500 + ',' + 1500 + ');');
                    driver.wait(until.elementsLocated(page.singleAssessment_page.elements.submitButton), 25000);
                    driver.findElement(page.singleAssessment_page.elements.submitButton).click();
                    return driver.sleep(5000);
                    driver.wait(until.elementsLocated(page.singleAssessment_page.elements.chooseActionButton), 25000);
                    return driver.findElement(page.singleAssessment_page.elements.chooseActionButton).click().then(function () {
                        driver.executeScript('return window.scrollTo(' + 1500 + ',' + 1500 + ');');
                        driver.wait(until.elementsLocated(page.singleAssessment_page.elements.submitButton), 25000);
                        driver.findElement(page.singleAssessment_page.elements.submitButton).click();
                        return driver.sleep(5000);
                    });
                });
            });


    },

    checkForm: function (formName) {
        driver.sleep(5000);
        var frmName2 = 'Strategy Discussion';
        //return helpers.gridFormClick(page.singleAssessment_page.elements.formsList, page.singleAssessment_page.elements.Name, formName)
        return helpers.gridGetClickForm(page.singleAssessment_page.elements.formsList, page.singleAssessment_page.elements.NameRow, page.singleAssessment_page.elements.Name, formName, frmName2);
    },

    //------Already there above ---- duplicate of fillAssDetailsSingleAssessMent
    // assessmentDetails: function () {
    // 	driver.sleep(2000);
    // 	driver.wait(until.elementsLocated(page.singleAssessment_page.elements.assessmentToggle), 25000);
    // 	return driver.findElement(page.singleAssessment_page.elements.assessmentToggle).click().then(function () {
    // 		driver.wait(until.elementLocated(page.singleAssessment_page.elements.assessmentStartDate), 20000);
    // 		driver.findElement(page.singleAssessment_page.elements.assessmentStartDate).click();
    // 		return helpers.gridClickDate('curr', '16')
    // 	});
    // }

    swDiscardForm: function () {
        driver.wait(until.elementsLocated(page.singleAssessment_page.elements.chooseActionButton), 25000);
        return driver.findElement(page.singleAssessment_page.elements.chooseActionButton).click()
            .then(function () {
                driver.wait(until.elementsLocated(page.singleAssessment_page.elements.discardButton), 25000);
                driver.findElement(page.singleAssessment_page.elements.discardButton).click();
                return driver.sleep(1500)
            });
    },

    tmDiscardForm: function () {
        driver.sleep(1000);
        driver.wait(until.elementsLocated(page.singleAssessment_page.elements.chooseActionButton), 25000);
        driver.findElement(page.singleAssessment_page.elements.AuthRejectDate).sendKeys("26/07/2017");
        return driver.findElement(page.singleAssessment_page.elements.chooseActionButton).click()
            .then(function () {
                driver.wait(until.elementsLocated(page.singleAssessment_page.elements.discardButton), 25000);
                driver.findElement(page.singleAssessment_page.elements.discardButton).click();
                return driver.sleep(2000)
            });
    },

    review: function () {
        driver.wait(until.elementsLocated(page.singleAssessment_page.elements.chooseActionButton), 25000);
        return driver.findElement(page.singleAssessment_page.elements.chooseActionButton).click()
            .then(function () {
                driver.wait(until.elementsLocated(page.singleAssessment_page.elements.reviewButton), 30000);
                driver.findElement(page.singleAssessment_page.elements.reviewButton).click();
                return driver.sleep(2000)
            });
    },
    segregateSubject: function () {
        return driver.wait(until.elementsLocated(page.singleAssessment_page.elements.nextStageDropDown), 25000).then(function () {
            return helpers.clickIncludesList(page.singleAssessment_page.elements.nextStageDropDownButtonDiv, 'button', by.css('li a'), config.PersonDetails.Name);
        })

    },
    selectNextStagesubject1: function (formName) {
        return driver.wait(until.elementsLocated(page.singleAssessment_page.elements.nextStepsList), 10000, 'nextStepsList not found').then(function () {
            return driver.findElements(page.contactRecord_page.elements.nextStepsList).then(function (elements) {
                return elements[0].click().then(function () {

                    console.log('Clicking form name : ', formName);
                    // var formList = page.contactRecord_page.elements.nextStepForm;
                    driver.sleep(1000);
                    var formList1 = '[name*="' + formName + '"] span';
                    return driver.findElement(By.css(formList1)).click();
                });
            });
        });

    },
    selectNextStagesubject2: function (formName) {
        console.log()
        // return driver.executeScript('return window.scrollTo(' + 700 + ',' + 700 + ');').then(function () {
        return driver.wait(until.elementsLocated(page.singleAssessment_page.elements.nextStepsList), 10000, 'nextStepsList not found').then(function () {
            return driver.findElements(page.contactRecord_page.elements.nextStepsList).then(function (elements) {
                return elements[1].click().then(function () {
                    // console.log('before execute Script');

                    // console.log('After execute Script');
                    console.log('Clicking form name : ', formName);
                    // var formList = page.contactRecord_page.elements.nextStepForm;
                    driver.sleep(1000);
                    var formList1 = '[name*="' + formName + '"]';
                    return driver.findElements(By.css(formList1)).then(function (elements) {

                        helpers.scrollIntoView(elements[1]);
                        return elements[1].findElement(by.css('span')).click();
                    });
                });
            });
        });
    },
    managerApproveForm: function () {
        driver.wait(until.elementsLocated(page.singleAssessment_page.elements.chooseActionButton), 25000);
        return driver.findElement(page.singleAssessment_page.elements.chooseActionButton).click()
            .then(function () {
                driver.wait(until.elementsLocated(page.singleAssessment_page.elements.approveButton), 30000);
                driver.findElement(page.singleAssessment_page.elements.approveButton).click();
                return driver.sleep(2000)
            });

    },

}













