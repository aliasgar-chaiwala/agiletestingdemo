module.exports = {

    elements: {
        form: by.css('.event-form'),
        formTitle: by.css('h1[role="heading"]'),
        subjectPill: by.css('.subject-panel span[class*="person-tag"]'),
        subjectBlock: by.css('.subject-panel.panel-sub-panel'),
        subjectBlockAccord: by.css('.subject-panel.panel-sub-panel .accordion-toggle'), //--------------need name tag

        stayInTchComponent: by.css('div[name="Staying in touch, Accommodation and Activity details"]'),
        stayInTchCompTitle: by.css('div.step-section span.panel-title'),
        stayInTchComponentAccord: by.css('div.step-section .accordion-toggle'),

        stayInTchblockTitle: by.css('div[data-view*="components/stayInTouch/stayInTouch"] span.form-subheadings'), //-------------------------------------------------need tag
        //stayInTchblockThisIsfor: by.css('div[data-view*="components/stayInTouch/stayInTouch"] .dropdown .align-middle span'),
        stayInTchblockThisIsfor: by.css('.title .name'),
        
        stayInTchblockAttemptLabel: by.css('div[name="wasAttemptMadeRow"] div label'),
        //stayInTchblockAttemptLabel: by.css('div[name="Staying in touch, Accommodation and Activity details"] a'),
        stayInTchblockAttemptYes: by.css('div[name="wasAttemptMadeRow"] .btn-three-state.yes'),
        stayInTchblockAttemptNo: by.css('div[name="wasAttemptMadeRow"] .btn-three-state.no'),
        stayInTchblockAttemptNotSpec: by.css('div[name="wasAttemptMadeRow"] .btn-three-state.not-specified'),
        stayInTchblockAttemptToggle: by.css('div [name="Staying in touch, Accommodation and Activity details"] .col-sm-1 div a'),
        //-------------------------------------------------
        stayInTchblockAttemptSuccessLabel: by.css('div[name="wasAttemptSuccessfulRow"] .control-label'),
        stayInTchblockAttemptSuccessYes: by.css('div[name="wasAttemptSuccessfulRow"] .btn-three-state.yes'),
        dateofContact: by.css('div[name="dateOfContactRow"] .datepicker-parent .dateonlypicker'),
        methodOfContactLabel: by.css('div[name="contactMethodRow"] .control-label'),
        methodOfContact: by.css('div[name="contactMethodRow"] .btn-dropdown.dropdown-toggle'),
        methodOfContactDDList: by.css('div[name="contactMethodRow"] ul.dropdown-menu'),
        methodOfContactDDItem: by.css('li a'),

        stayInTchblockAttemptSuccessNo: by.css('div[name="wasAttemptSuccessfulRow"] .btn-three-state.no'),
        whyUnsuccessfulLabel: by.css('div[name="reasonForUnsuccessfulAttemptRow"] .control-label'),
        whyUnsuccessfulDD: by.css('div[name="reasonForUnsuccessfulAttemptRow"] .btn-dropdown.dropdown-toggle'),
        whyUnsuccessfulDDList: by.css('div[name="reasonForUnsuccessfulAttemptRow"] ul.dropdown-menu'),
        whyUnsuccessfulDDItem: by.css('li a'),

        stayInTchblockAttemptSuccessNotSpec: by.css('div[name="wasAttemptSuccessfulRow"] .btn-three-state.not-specified'),
        //-------------------------------------------------

        accommodationDetailsTitle: by.css('div[data-view*="/accommodationDetails"] span.form-subheadings'),
        accommodationDetailsThisIsfor: by.css('div[data-view*="/accommodationDetails"] .dropdown .align-middle span'),
        accomodationTypeLabel: by.css('div[name="accomodationTypeRow"] .control-label'),
        accomodationTypeDD: by.css('div[name="accomodationTypeRow"] button#dropdownMenu1'),
        accomodationTypeDDList: by.css('div[name="accomodationTypeRow"] ul.dropdown-menu'),
        accomodationTypeDDItem: by.css('li a'),

        consideredSuitableLabel: by.css('div[name="isAccomodationSuitableRow"] .control-label'),
        consideredSuitableYes: by.css('div[name="isAccomodationSuitableRow"] .btn-three-state.yes'),
        consideredSuitableNo: by.css('div[name="isAccomodationSuitableRow"] .btn-three-state.no'),
        consideredSuitableNotSpec: by.css('div[name="isAccomodationSuitableRow"] .btn-three-state.not-specified'),

        activityStatusLabel: by.css('div[name="activityStatusRow"] .control-label'),
        activityStatusDD: by.css('div[name="activityStatusRow"] .btn-dropdown.dropdown-toggle'),
        activityStatusDDList: by.css('div[name="activityStatusRow"] ul.dropdown-menu'),
        activityStatusDDItem: by.css('li a'),
    },

    verifyKITform: function (personName) {
        return driver.wait(until.elementsLocated(page.kit_page.elements.stayInTchComponent), 10000, 'stay In Tch Component not visible').then(function () {
            driver.findElement(page.kit_page.elements.stayInTchCompTitle).getText().then(function (stayInTchCompTitle) {
                expect(stayInTchCompTitle).to.contain('Staying in touch, Accommodation and Activity details');
            });
            return driver.findElement(page.kit_page.elements.stayInTchComponentAccord).click().then(function () {
                return driver.wait(until.elementsLocated(page.kit_page.elements.stayInTchblockTitle), 10000, 'stayInTchblockTitle not visible').then(function () {
                    driver.findElement(page.kit_page.elements.stayInTchblockTitle).getText().then(function (stayInTchblockTitle) {
                        expect(stayInTchblockTitle).to.contain('Staying in touch details');
                    });
                    return driver.sleep(3000).then(function () {


                        driver.findElement(page.kit_page.elements.stayInTchblockThisIsfor).isDisplayed();
                        driver.findElement(page.kit_page.elements.stayInTchblockThisIsfor).getText().then(function (stayInTchblockThisIsfor) {
                           
                            expect(stayInTchblockThisIsfor).to.contain(personName);
                        });
                        driver.sleep(2000);
                        driver.findElement(page.kit_page.elements.stayInTchblockAttemptToggle).click();
                        driver.findElement(page.kit_page.elements.stayInTchblockAttemptLabel).isDisplayed();
                        driver.findElement(page.kit_page.elements.stayInTchblockAttemptLabel).getText().then(function (stayInTchblockAttemptLabel) {
                            expect(stayInTchblockAttemptLabel).to.contain('Was an attempt made to get in touch?');
                        });
                        driver.findElement(page.kit_page.elements.stayInTchblockAttemptYes).isDisplayed();
                        //console.log(66);
                        driver.sleep(500);
                        return driver.findElement(page.kit_page.elements.stayInTchblockAttemptYes).click().then(function () {

                            driver.sleep(500);

                            driver.findElement(page.kit_page.elements.stayInTchblockAttemptSuccessLabel).isDisplayed();

                            return driver.findElement(page.kit_page.elements.stayInTchblockAttemptSuccessLabel).getText().then(function (stayInTchblockAttemptSuccessLabel) {
                                expect(stayInTchblockAttemptSuccessLabel).to.contain('Was this attempt successful?');

                                driver.executeScript('return window.scrollTo(' + 480 + ',' + 480 + ');');
                                driver.sleep(500);
                                driver.findElement(page.kit_page.elements.stayInTchblockAttemptSuccessYes).click();
                                driver.sleep(500);
                                driver.findElement(page.kit_page.elements.dateofContact).isDisplayed();
                                driver.findElement(page.kit_page.elements.methodOfContact).isDisplayed();

                                driver.findElement(page.kit_page.elements.stayInTchblockAttemptSuccessNo).isDisplayed();
                                return driver.findElement(page.kit_page.elements.stayInTchblockAttemptSuccessNo).click().then(function () {
                                    //console.log(7777);
                                    driver.sleep(1000);
                                    driver.findElement(page.kit_page.elements.whyUnsuccessfulLabel).isDisplayed();
                                    driver.sleep(500);
                                    return driver.findElement(page.kit_page.elements.whyUnsuccessfulLabel).getText().then(function (whyUnsuccessfulLabel) {
                                        ////console.log(10);
                                        expect(whyUnsuccessfulLabel).to.contain('Why was this attempt unsuccessful?');

                                        ////console.log(11);
                                        driver.findElement(page.kit_page.elements.whyUnsuccessfulDD).isDisplayed();
                                        ////console.log(12);
                                        //------------------------------------------//---------------------------------------//----------------------------------
                                        return driver.findElement(page.kit_page.elements.accommodationDetailsTitle).getText().then(function (accommodationDetailsTitle) {
                                            ////console.log(13);
                                            expect(accommodationDetailsTitle).to.contain('Accommodation details and activity status');

                                            ////console.log(14);
                                            driver.findElement(page.kit_page.elements.accommodationDetailsThisIsfor).isDisplayed();
                                            ////console.log(15);
                                            return driver.findElement(page.kit_page.elements.accommodationDetailsThisIsfor).getText().then(function (accommodationDetailsThisIsfor) {
                                                //console.log(16);
                                                expect(accommodationDetailsThisIsfor).to.contain(personName);
                                                //console.log(17);
                                                driver.findElement(page.kit_page.elements.accomodationTypeLabel).isDisplayed();
                                                //console.log(18);
                                                return driver.findElement(page.kit_page.elements.accomodationTypeLabel).getText().then(function (accomodationTypeLabel) {
                                                    //console.log(19);
                                                    expect(accomodationTypeLabel).to.contain('Accomodation type');

                                                    //console.log(2);
                                                    driver.findElement(page.kit_page.elements.accomodationTypeDD).isDisplayed();
                                                    //console.log(3);
                                                    return driver.findElement(page.kit_page.elements.consideredSuitableLabel).getText().then(function (consideredSuitableLabel) {
                                                        //console.log(4);
                                                        expect(consideredSuitableLabel).to.contain('Is their accommodation considered suitable?');

                                                        driver.findElement(page.kit_page.elements.consideredSuitableYes).isDisplayed();
                                                        driver.findElement(page.kit_page.elements.consideredSuitableNo).isDisplayed();

                                                        driver.findElement(page.kit_page.elements.activityStatusLabel).isDisplayed();
                                                        driver.findElement(page.kit_page.elements.activityStatusLabel).getText().then(function (activityStatusLabel) {
                                                            expect(activityStatusLabel).to.contain('Activity status');
                                                        });
                                                        driver.findElement(page.kit_page.elements.activityStatusDD).isDisplayed();
                                                        return driver.findElement(page.kit_page.elements.consideredSuitableNotSpec).isDisplayed();
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

    fillStayInTouchDet: function () {
        var date = new Date();
        var todayDate = date.getDate();
        driver.executeScript('return window.scrollTo(' + 100 + ',' + 100 + ');');
        return driver.wait(until.elementsLocated(page.kit_page.elements.stayInTchblockTitle), 10000, 'stayInTchblockTitle not visible').then(function () {

            return driver.findElement(page.kit_page.elements.stayInTchblockAttemptYes).click().then(function () {
                driver.sleep(500);
                driver.findElement(page.kit_page.elements.stayInTchblockAttemptSuccessLabel).isDisplayed();
                driver.executeScript('return window.scrollTo(' + 480 + ',' + 480 + ');');
                driver.sleep(500);
                driver.findElement(page.kit_page.elements.stayInTchblockAttemptSuccessYes).click();
                driver.sleep(500);
                driver.findElement(page.kit_page.elements.dateofContact).click();
                driver.sleep(500);
                return helpers.gridClickDate('cur', todayDate).then(function () {
                    driver.findElement(page.kit_page.elements.stayInTchblockAttemptSuccessLabel).click();
                    driver.findElement(page.kit_page.elements.methodOfContact).click();
                    driver.sleep(500);
                    driver.sleep(500);
                    return driver.wait(until.elementsLocated(page.kit_page.elements.methodOfContactDDList), 10000, 'methodOfContactDDList not visible').then(function () {
                        return helpers.clickIncludesGrid(page.kit_page.elements.methodOfContactDDList, page.kit_page.elements.methodOfContactDDItem, 'Email');
                    });
                });
            });
        });
    },

    fillAccomodatDet: function () {

        driver.executeScript('return window.scrollTo(' + 450 + ',' + 450 + ');');
        return driver.findElement(page.kit_page.elements.accomodationTypeLabel).getText().then(function (accomodationTypeLabel) {
            expect(accomodationTypeLabel).to.contain('Accomodation type');
            driver.findElement(page.kit_page.elements.accomodationTypeDD).click();
            driver.sleep(500);
            return driver.wait(until.elementsLocated(page.kit_page.elements.accomodationTypeDDList), 10000, 'methodOfContactDDList not visible').then(function () {
                return helpers.clickIncludesGrid(page.kit_page.elements.accomodationTypeDDList, page.kit_page.elements.accomodationTypeDDItem, 'Deported').then(function () {
                    driver.findElement(page.kit_page.elements.consideredSuitableYes).click();
                    driver.findElement(page.kit_page.elements.activityStatusDD).click();
                    return driver.wait(until.elementsLocated(page.kit_page.elements.activityStatusDDList), 10000, 'methodOfContactDDList not visible').then(function () {
                        return helpers.clickIncludesGrid(page.kit_page.elements.activityStatusDDList, page.kit_page.elements.activityStatusDDItem, 'Young person engaged full time in training or employment').then(function () {
                            return driver.executeScript('return window.scrollTo(' + 900 + ',' + 900 + ');');
                        });
                    });
                });
            });
        });
    },

}