module.exports = {

    elements: {
        form: by.css('.event-form'),
        formTitle: by.css('h1[role="heading"]'),
        subjectPill: by.css('h1[role="heading"]'),
        subjectBlock: by.css('.subject-panel.panel-sub-panel'),
        subjectBlockAccord: by.css('.subject-panel.panel-sub-panel .accordion-toggle'), //--------------need name tag
        reasonComponent: by.css('div[name="Reason"]'),
        reasonCompletedLabel: by.css('div[name="Reason"] span.progress-label'),
        reasonComponentAccord: by.css('div[name="Reason"] .accordion-toggle'),
        reasonCaseClosureDate: by.css('[data-bind*="click: showPicker"] i'),
        reasonCaseClosureDDlabel: by.css('span[aria-label="Reason"]'),
        reasonDetailsDD: by.css('#dropdownMenu1'),
        reasonDetailsDDList: by.css('div[data-view*="components/reason/reason"] div.dropdown ul[role="menu"]'),
        reasonDetailsDDListItem: by.css('li a'),
        commentsComponent: by.css('div[name="Comments"]'),
        commentsCompletedLabel: by.css('div[name="Comments"] span.progress-label'),
        commentsComponentAccord: by.css('div[name="Comments"] .accordion-toggle'),
        commentsComponentDetailsLabel: by.css('div[data-view*="/subjectView/subjectView"] label[for="textareamaxheight Reason"]'),
        commentsComponentDetailsInput: by.css('div[data-view*="/subjectView/subjectView"] textarea[placeholder="Please provide comments"]'),

        //--------------------------
        workerTabCaseCount: by.css('div.worker-tabs.nav-pills a.worker-pill.cases-tabs1.active span'),
        workerTabCaseBlock: by.css('.caseContainer .app-info-block.cases.unassigned-workload'),
        caseCloseButton: by.css('a[name="btnClosecase"][data-bind*="CloseCase"]'),
        caseCloseDescription: by.css('div[id="demo"] span[aria-label*="the closure procedure"]'),
        caseCloseRightTick: by.css('div[id="demo"] a.icon-mini.icon-thik-tick'),
        personAssignButton: by.css('a[name="btnClosecase"][data-bind*="Assign"]'),
        //----
    },

    verifyClosureForm: function () {
        driver.sleep(3000);
        return driver.wait(until.elementsLocated(page.caseClosure_page.elements.reasonComponent), 10000, 'reasonComponent not visible')
        /*.then(function () {
            return driver.findElement(page.caseClosure_page.elements.reasonComponentAccord).click()*/.then(function () {
                //console.log(1);
                //return driver.wait(until.elementsLocated(page.caseClosure_page.elements.reasonCaseClosureDate), 10000, 'reasonCaseClosureDate not visible').then(function () {
                   // driver.findElement(page.caseClosure_page.elements.reasonCaseClosureDate).isDisplayed();
                    //console.log(2);
                    driver.findElement(page.caseClosure_page.elements.reasonCaseClosureDDlabel).isDisplayed();
                    //console.log(3);
                    return driver.wait(until.elementsLocated(page.caseClosure_page.elements.reasonDetailsDD), 20000, 'reasonDetailsDD not visible').then(function () {
                        //console.log(4);
                        driver.findElement(page.caseClosure_page.elements.reasonDetailsDD).click();
                        //console.log(5);
                        return driver.wait(until.elementsLocated(page.caseClosure_page.elements.reasonDetailsDDList), 20000, 'reasonDetailsDDList missing').then(function () {
                            //console.log(6);
                            driver.findElement(page.caseClosure_page.elements.reasonComponentAccord).click();
                            //console.log(7);
                            return driver.wait(until.elementsLocated(page.caseClosure_page.elements.commentsComponent), 20000, 'commentsComponent missing').then(function () {
                                //console.log(7);
                                return driver.findElement(page.caseClosure_page.elements.commentsComponentAccord).click().then(function () {
                                    //console.log(8);
                                    driver.findElement(page.caseClosure_page.elements.commentsComponentDetailsLabel).isDisplayed();
                                    //console.log(9);
                                    return driver.findElement(page.caseClosure_page.elements.commentsComponentAccord).click();
                                });
                            });
                        });

                    });
                });
            //});
    },

    fillReason: function () {
        return driver.wait(until.elementsLocated(page.caseClosure_page.elements.reasonComponent), 10000)
        .then(function () {
       // return driver.findElement(page.caseClosure_page.elements.reasonComponentAccord,15000).click()
            //.then(function () {
                //console.log('in createWarningIcon click() waited 5sec');
                return driver.wait(until.elementsLocated(page.caseClosure_page.elements.reasonCaseClosureDate), 20000).then(function () {
                    return driver.findElement(page.caseClosure_page.elements.reasonCaseClosureDate).click()
                        .then(function () {
                            driver.findElement(page.caseClosure_page.elements.subjectPill).click();
                            driver.findElement(page.caseClosure_page.elements.reasonCaseClosureDDlabel).click();
                            return driver.wait(until.elementsLocated(page.caseClosure_page.elements.reasonDetailsDD), 20000).then(function () {
                                driver.findElement(page.caseClosure_page.elements.reasonDetailsDD).click();
                                return driver.wait(until.elementsLocated(page.caseClosure_page.elements.reasonDetailsDDList), 30000).then(function () {
                                    return helpers.clickIncludesGrid(page.caseClosure_page.elements.reasonDetailsDDList, page.caseClosure_page.elements.reasonDetailsDDListItem, 'Special guardianship order')
                                        .then(function () {
                                            return driver.findElement(page.caseClosure_page.elements.reasonCompletedLabel).isDisplayed();
                                            // return driver.sleep(1000);                                    
                                        });
                                });
                            });
                        });
                });
            });
       // });
    },

    fillComment: function () {
        return driver.wait(until.elementsLocated(page.caseClosure_page.elements.commentsComponent),20000).then(function () {
          return driver.findElement(page.caseClosure_page.elements.commentsComponentAccord).click().then(function () {
               driver.sleep(500);
                return driver.wait(until.elementsLocated(page.caseClosure_page.elements.commentsComponentDetailsLabel), 10000).then(function () {
                    driver.findElement(page.caseClosure_page.elements.commentsComponentDetailsInput).sendKeys("Closure Request Comments");
                    driver.findElement(page.caseClosure_page.elements.commentsComponentDetailsLabel).click();
                    driver.findElement(page.caseClosure_page.elements.commentsComponentDetailsLabel).isDisplayed();
                    return driver.sleep(1000);
                });
            });
       
        });
    },

    closeCase: function (PERSON) {
        return driver.wait(until.elementLocated(page.caseClosure_page.elements.workerTabCaseBlock), 15000).then(function () {
            return helpers.gridGetElement(by.css('.my-teams-member-group.active-panel'), page.caseClosure_page.elements.workerTabCaseBlock, PERSON).then(function (personBlock) {
                return driver.wait(until.elementLocated(page.caseClosure_page.elements.caseCloseButton), 15000).then(function () {
                    driver.sleep(3000);
                    /**caseCloseDescription
                     * caseCloseRightTick */
                    return personBlock.findElement(page.caseClosure_page.elements.caseCloseButton).click().then(function () {
                        return driver.wait(until.elementLocated(page.caseClosure_page.elements.caseCloseDescription), 15000).then(function () {
                            driver.sleep(1000);
                            personBlock.findElement(page.caseClosure_page.elements.caseCloseDescription).getText().then(function (caseCloseDescription) {
                                console.log("Case Close Text: ", caseCloseDescription);
                                expect(caseCloseDescription).to.include("This case is marked for closure. It seems that you want to proceed with the closure procedure");
                            });
                            return personBlock.findElement(page.caseClosure_page.elements.caseCloseRightTick).click().then(function () {
                                return driver.sleep('5000');
                            });
                        });
                    });
                });
            });
        });
    },

    varifyCaseCloseIcon: function () {
        return driver.wait(until.elementsLocated(page.personFacet_page.elements.essentioalInfoSection), 10000).then(function () {
            return driver.findElement(page.personFacet_page.elements.essentialInfoCaseCloseIcon).then(function (caseCloseicon) {
                driver.actions().mouseMove(caseCloseicon).perform();
                driver.sleep(500);
            });
        });
    },

    verifyAutosave: function () {
        return driver.wait(until.elementsLocated(page.caseClosure_page.elements.subjectBlock), 30000).then(function () {
            return driver.wait(until.elementsLocated(page.caseClosure_page.elements.subjectBlockAccord), 30000).then(function () {
                return driver.findElement(page.caseClosure_page.elements.subjectBlockAccord).click().then(function () {
                    driver.sleep(10000);
                    return driver.wait(until.elementsLocated(by.css('div.autosave')), 30000).then(function () {
                        return driver.findElement(by.css('div.autosave[data-bind*="aria-label:lastAutoSaved"]')).getText().then(function (autoSaveMessage) {
                            expect(autoSaveMessage).to.contain('Last saved');
                        });
                    });
                });
            });
        });
    }

}