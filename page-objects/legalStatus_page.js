module.exports = {

    //  url: 'https://www.google.co.in/[a-zA-Z0-9\-_?=]+',

    elements: {
        legalStatusPageContainer: by.css('div.legal-status div[class="container-fluid"]'),
        legalStatusPageContainer1: by.css('div.legal-status div.container-fluid:nth-child(2)'),
        legalStatusIcon: by.css('a.hatrickIcons.icon-create-new'),
        legalStatusPageTitle: 'Legal Status | One Social Care',
        legalStatusPageHeading: by.css('h1.page-title'),
        legalStatusSection: by.css('div.create-new-component.fadeInDown.event-form'),

        legalStatusDropDownLabel: by.css('label[for="legalStatus-starts"]'), //------------------- need to change for - is same as starts on
        //legalStatusDropDown: by.css('button.btn-dropdown-new.btn-block.legal-dropdown'),
        legalStatusDropDown: by.css('button.btn.text-ellipsis'),
        legalStatusDropDownList: by.css('ul.newLegalStatusList'),
        legalStatusDropDownListItem: by.css('li a'),//clickIncludesGrid

        legalStatusStartsOnLabel: by.css('#maincontent div.legal-status > div.create-new-component.fadeInDown.event-form > div > div:nth-child(3) > div > div > label'),
        legalStatusStartsOnDatepicker: by.css('div[data-bind*="activationData: { data: \'statusStartOn\'"] input'),
        legalStatusStartsOnDatepickerButton: by.css('div[data-bind*="activationData: { data: \'statusStartOn\'"] button'),
        legalStatusStartReasonLabel: by.css('label[for="legalStatus-start-reason"]'),
        legalStatusStartReason: by.css('textarea#legalStatus-start-reason'),

        legalStatusEndsOnLabel: by.css('label[for="legalStatus-ends"]'),
        legalStatusEndsOnDatepicker: by.css('div[data-bind*="activationData: { data: \'statusEndOn\'"] input'),
        legalStatusEndsOnDatepickerButton: by.css('div[data-bind*="activationData: { data: \'statusEndOn\'"] button'),
        legalStatusEndReasonLabel: by.css('label[for="legalStatus-end-reason"]'),
        legalStatusEndReason: by.css('textarea#legalStatus-end-reason'),

        createStatusSubmit: by.css('button.btn-create-new[data-bind*="savePersonLegalStatus"]'),

        //-------------------
        createdStatusPanel: by.css('section.ls-content-item.tab-section'),
        createdStatusPanelTitle: by.css('span.strong'),
        createdStatusPanelmore: by.css('div.status-link-more.align-right a'),
        createdStatusPanelEdit: by.css('a.pull-right.ls-btn-edit.icon-edit.pointer'),
        createdStatusPanelStartReason: by.css('.start-reason-container pre.view-only'),
        createdStatusPanelEndReason: by.css('.end-reason-container pre.view-only'),
        legalStatusDropDownDiv: by.css('div[name="personLegalStatusAddStatus"]'),
        commonListItem: by.css('li a'),
        statusLabel: by.css('div[data-bind*="setDropdownOpen"] label[for="legalStatus-starts"]')
    },

    verifyLegalStatusPage: function () {
        return driver.wait(until.elementsLocated(page.legalStatus_page.elements.legalStatusPageContainer), 10000)
            .then(function () {
                driver.getTitle().then(function (pageTitle) {
                    console.log('pageTitle : ', pageTitle);
                    expect(pageTitle).to.contain(page.legalStatus_page.elements.legalStatusPageTitle);
                });
            }).then(function () {
                return driver.wait(until.elementsLocated(page.legalStatus_page.elements.legalStatusPageHeading), 10000)
                    .then(function () {
                        return driver.findElement(page.legalStatus_page.elements.legalStatusPageHeading).getText().then(function (pageHeading) {
                            console.log('pageHeading : ', pageHeading);
                            expect(pageHeading).to.contain("Status");
                        });
                    });
            });
    },

    newLegalStatusIcon: function () {

        return driver.wait(until.elementsLocated(page.legalStatus_page.elements.legalStatusIcon), 10000)
            .then(function () {
                driver.findElement(page.legalStatus_page.elements.legalStatusIcon).click();
                return driver.wait(until.elementsLocated(page.legalStatus_page.elements.legalStatusSection), 10000);
            });
    },

    verifyNewStatusSection: function () {
        return driver.wait(until.elementsLocated(page.legalStatus_page.elements.legalStatusSection), 10000).then(function () {
            driver.findElement(page.legalStatus_page.elements.legalStatusDropDownLabel).getText().then(function (legalStatusDropDownLabel) {
                expect(legalStatusDropDownLabel).to.contain("Status");
            });
            // driver.findElement(page.legalStatus_page.elements.legalStatusStartsOnLabel).getText().then(function (legalStatusStartsOnLabel) {
            //     expect(legalStatusStartsOnLabel).to.contain("Starts on");
            // });
            driver.findElement(page.legalStatus_page.elements.legalStatusStartReasonLabel).getText().then(function (legalStatusStartReasonLabel) {
                expect(legalStatusStartReasonLabel).to.contain("Start reason");
            });
            driver.findElement(page.legalStatus_page.elements.legalStatusEndsOnLabel).getText().then(function (legalStatusEndsOnLabel) {
                expect(legalStatusEndsOnLabel).to.contain("Ends on");
            });
            driver.findElement(page.legalStatus_page.elements.legalStatusEndReasonLabel).getText().then(function (legalStatusEndReasonLabel) {
                expect(legalStatusEndReasonLabel).to.contain("End reason");
            });

            driver.findElement(page.legalStatus_page.elements.legalStatusDropDown).isDisplayed().then(function (isDropDownPresent) {
                expect(isDropDownPresent).to.be.true;
            });
            driver.findElement(page.legalStatus_page.elements.legalStatusStartsOnDatepicker).isDisplayed().then(function (isStartDatePickerPresent) {
                expect(isStartDatePickerPresent).to.be.true;
            });
            driver.findElement(page.legalStatus_page.elements.legalStatusStartReason).isDisplayed().then(function (isStartReasonTextAreaPresent) {
                expect(isStartReasonTextAreaPresent).to.be.true;
            });
            driver.findElement(page.legalStatus_page.elements.legalStatusEndsOnDatepicker).isDisplayed().then(function (isEndDatePickerPresent) {
                expect(isEndDatePickerPresent).to.be.true;
            });
            driver.findElement(page.legalStatus_page.elements.legalStatusEndReason).isDisplayed().then(function (isEndReasonTextAreaPresent) {
                expect(isEndReasonTextAreaPresent).to.be.true;
            })
            driver.findElement(page.legalStatus_page.elements.createStatusSubmit).isDisplayed().then(function (isSubmitButtonPresent) {
                return expect(isSubmitButtonPresent).to.be.true;

            })
        });
    },

    createNewLegalStatus: function (STATUS) {

        var date1 = new Date();
        console.log('date1 : ', date1);
        newDate1 = date1.getDate();

        return driver.wait(until.elementsLocated(page.legalStatus_page.elements.legalStatusSection), 10000)
            .then(function () {

                // return helpers.clickIncludesGrid(page.legalStatus_page.elements.legalStatusDropDownList, page.legalStatus_page.elements.legalStatusDropDownListItem, STATUS)
                return helpers.clickIncludesList(page.legalStatus_page.elements.legalStatusDropDownDiv, "button", page.legalStatus_page.elements.commonListItem, STATUS)
                    .then(function () {
                        driver.findElement(page.legalStatus_page.elements.legalStatusStartsOnDatepickerButton).click().then(function () {
                            helpers.gridClickDate('curr', newDate1);
                        });
                        driver.findElement(page.legalStatus_page.elements.statusLabel).click();
                        driver.findElement(page.legalStatus_page.elements.legalStatusStartReasonLabel).click();
                        driver.findElement(page.legalStatus_page.elements.legalStatusStartReason).sendKeys(STATUS + ' Start Reason');
                        driver.findElement(page.legalStatus_page.elements.legalStatusEndsOnLabel).click();
                        driver.findElement(page.legalStatus_page.elements.legalStatusEndsOnDatepickerButton).click().then(function () {
                            helpers.gridClickDate('next', newDate1);
                        })
                        driver.findElement(page.legalStatus_page.elements.statusLabel).click();
                        driver.findElement(page.legalStatus_page.elements.legalStatusEndReasonLabel).click();
                        return driver.findElement(page.legalStatus_page.elements.legalStatusEndReason).sendKeys(STATUS + ' End Reason').then(function () {
                            driver.findElement(page.legalStatus_page.elements.createStatusSubmit).click();
                            return driver.sleep(1000);
                        });
                    });
            });
    },

    verifyCreatedLegalStatus: function (STATUS) {
        driver.sleep(1500);
        return driver.wait(until.elementsLocated(page.legalStatus_page.elements.createdStatusPanel), 10000).then(function () {
            //return driver.findElements(page.legalStatus_page.elements.legalStatusPageContainer).then(function(element){

            //return helpers.gridGetElement(element[1], page.legalStatus_page.elements.createdStatusPanel, STATUS)
            return helpers.gridGetElement(page.legalStatus_page.elements.legalStatusPageContainer1, page.legalStatus_page.elements.createdStatusPanel, STATUS)
                .then(function (StatusBlock) {

                    StatusBlock.findElement(page.legalStatus_page.elements.createdStatusPanelTitle).getText().then(function (createdStatusPanelTitle) {
                        console.log('Status Block Title : ', createdStatusPanelTitle);
                        expect(createdStatusPanelTitle).to.contain(STATUS);
                    });
                });
            driver.actions().mouseMove(StatusBlock).perform();
            StatusBlock.findElement(page.legalStatus_page.elements.createdStatusPanelEdit).isDisplayed();
            StatusBlock.findElement(page.legalStatus_page.elements.createdStatusPanelmore).click();
            StatusBlock.findElement(page.legalStatus_page.elements.createdStatusPanelStartReason).getText().then(function (createdStatusPanelStartReason) {
                console.log('Status Block Start Reason : ', createdStatusPanelStartReason)
                expect(createdStatusPanelStartReason).to.contain(STATUS + ' Start Reason');
            });
            StatusBlock.findElement(page.legalStatus_page.elements.createdStatusPanelEndReason).getText().then(function (createdStatusPanelEndReason) {
                console.log('Status Block Start Reason : ', createdStatusPanelEndReason)
                expect(createdStatusPanelEndReason).to.contain(STATUS + ' End Reason');
            });

            StatusBlock.findElement(page.legalStatus_page.elements.createdStatusPanelmore).click();
            return driver.sleep(1000);
        });
    },

}