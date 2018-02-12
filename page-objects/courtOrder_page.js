var dateFormat = require('dateformat');
module.exports = {
    elements: {
        //////////////////////--------CO = Court Order------------------//////////////////////
//lnk-new-budget
        courtOrderWidget: by.css('div[name="caseOrder-section"]'),
        courtOrderWidgetTitle: by.css('div[name="caseOrder-section"] h4'),
        courtOrderViewAllCOLink: by.css('div[name="caseOrder-section"] a.more-link-color'),

        courtOrderCreatedOrder: by.css('.form-group.m-t-sm'),
        courtOrderCreatedOrderTitle: by.css('a'),
        courtOrderCreatedOrderDate: by.css('span'),

        courtOrderPage: by.css('div[data-view*="courtOrder"]'),
       //courtOrderNew: by.css('div[data-view*="courtOrder"] a.icon-create-new[data-bind*="openCourtOrderPanel"]'),
       courtOrderNew: by.css('#lnk-new-budget'),

        newCOSection: by.css('div[id="create-new-courtOrder"]'),
        searchOrgLabel: by.css('label[for="searchOrganisation"]'),
        newCOSectionTitle: by.css('div[id="create-new-courtOrder "] h3.create-new-title'),

        COTypeLabel: by.css('label[for="COT"]'),
        COTypeDD: by.css('div[data-bind*="lookup.courtOrderList"].currentRole'),

        CourtNameLabel: by.css('label[for="searchOrganisation"]'),
        CourtSearchOrg: by.css('div[name="court-name"] .selectize-input input[placeholder="Search organisation ..."]'),
        CourtSearchOrgList: by.css('div[name="court-name"] .selectize-dropdown div.optgroup[data-group="organisation"]'),
        CourtSearchOrgListItem: by.css('div.option'),
        CourtSearchOrg: by.css('div[name="court-name"] .selectize-input input[placeholder="Search organisation ..."]'),
        CourtSearchOrgPill: by.css('div[name="court-name"] .organisation-tag'),
        //selectize-dropdown multi
        COReqDateLabel: by.css('label[for="requestedOn"]'),
        COReqDatePicker: by.css('div#requestedOn input'),

       // COReqBYLabel: by.css('label[for="searchPerson"]'),
        //COReqBySearchProf: by.css('div#searchPerson .selectize-input input'),
         COReqBySearchProf:  by.css('div[data-view*="newEntitySearch"] input[type="text"]'),
         COReqBySearchDiv:  by.css('#dropdownMenu1 div.searchResult-container'),
         COReqBySearchDivResult:  by.css('#dropdownMenu1 div.searchResult-container div.entity-search-content ul li a'),
        COReqBySearchProfList: by.css('div#searchPerson .selectize-dropdown div'),
        COReqBySearchProfListItem: by.css('div.option'),

        COReasonForReqLabel: by.css('label[for="requestReason"]'),
        COReasonText: by.css('textarea#requestReason'),

        COReqGrantedLabel: by.css('label[for="checkGranted"]'),
        COReqGrantYes: by.css('label.btn.btn-three-state.yes'),

        //--------------YES Section Selectors-------------
        orderStartDateLbl: by.css('label[for="startedOn"]'),
        orderStartDate: by.css('div#startedOn input'),

        orderEndDateLbl: by.css('label[for="endOn"]'),
        orderEndDate: by.css('div#endOn input'),

        oredrSay: by.css('label[for="summary"]'),
        oredrSayInput: by.css('textarea#summary'),

        COExtYes: by.css('div#checkExtended label.btn-three-state.yes'),
        COExtNO: by.css('div#checkExtended label.btn-three-state.no'),
        COExtNotSpecified: by.css('div#checkExtended label.btn-three-state.not-specified'),
        //---------ext yes scen-----------------
        orderExtUntillDt: by.css('div#extendedTill input'),
        orderExtReason: by.css('textarea#extensionReason'),
        //---------ext yes scen-----------------
        CODischYes: by.css('div#checkDischarged label.btn-three-state.yes'),
        CODischNO: by.css('div#checkDischarged label.btn-three-state.no'),
        CODischNotSpecified: by.css('div#checkDischarged label.btn-three-state.not-specified'),
        //-----------------dischg yes scen-----------------------
        orderDischargeDt: by.css('div#dischargedDate input'),
        orderDischargeReason: by.css('textarea#dischargeReason'),
        //-----------------dischg yes scen-----------------------
        //--------------YES Section Selectors-------------o

        COReqGrantNO: by.css('label.btn.btn-three-state.no'),
        //--------------NO Section Selectors-------------

        //--------------NO Section Selectors-------------
        COReqGrantNotSpec: by.css('label.btn.btn-three-state.not-specified'),
        createOrderSubmit: by.css('button[name="court-order-send"]'),
        //----------------------
        createrCOContainer: by.css('div[name="courtOrderContainer"]'),
        createdOrderBlock: by.css('.provision-block-wrapper .provision-block.row'),
        createdOrderBlockOrderType: by.css('h5[name="orderType"]'),
        createdOrderBlockCourtPill: by.css('h6[name="requestTo"] span.organisation-tag'),
        createdOrderBlockReqBy: by.css('h6[name="requestBy"] span[class*="tag"]'),

        createdOrderBlockRequestedOnDt: by.css('p[name="reqOnDt"]'),
        createdOrderBlockDischgOnDt: by.css('p[name="disOnDt"]'),
        createdOrderBlockExtUntilDt: by.css('p[name="extUntilDt"]'),
        // createdOrderBlockRequestedOnDt: by.css('p[name="reqOnDt"]'),
        // createdOrderBlockRequestedOnDt: by.css('p[name="reqOnDt"]'),

        createdOrderBlockMore: by.css('a[name="courtOrder-list-expander"]'),
        ///------------------
        courtOrderBlockTable: by.css('div[name="courtDetails"]'),
        courtOrderEditIcon: by.css('span[name="provision-list-edit-btn"]'),

        courtOrderBlockReqStatus: by.css('div[name="requestedRow"]'),
        courtOrderBlockDisEarlyStatus: by.css('div[name="dischargeEarlyRow"]'),
        courtOrderBlockExtStatus: by.css('div[name="extendedRow"]'),
        courtOrderBlockGrantStatus: by.css('div[name="grantedRow"]'),
        courtOrderBlockRejectStatus: by.css('div[name="rejectedRow"]'),
    },

    navigateCourtOrder: function () {

        return driver.wait(until.elementsLocated(page.courtOrder_page.elements.courtOrderWidget), 10000, "Court Order Widget Not Visible")
            .then(function () {
                driver.wait(until.elementsLocated(page.courtOrder_page.elements.courtOrderWidgetTitle), 10000, "Court Order Widget Title Not Visible");
                return driver.findElement(page.courtOrder_page.elements.courtOrderWidgetTitle).getText().then(function (title) {
                    expect(title).to.contain("Active court orders");
                    driver.wait(until.elementsLocated(page.courtOrder_page.elements.courtOrderViewAllCOLink), 10000, "Court Order Widget More Link Not Visible");
                    driver.findElement(page.courtOrder_page.elements.courtOrderViewAllCOLink).click();
                    return driver.wait(until.elementsLocated(page.courtOrder_page.elements.courtOrderPage), 10000, "Court Order Page Not Visible");
                });
            });
    },

    verifyCOPersonFacet: function (COTYPE) {
        return driver.wait(until.elementsLocated(page.courtOrder_page.elements.courtOrderWidget), 10000, "Court Order Widget Not Visible")
            .then(function () {
                driver.wait(until.elementsLocated(page.courtOrder_page.elements.courtOrderWidgetTitle), 10000, "Court Order Widget Title Not Visible");
                return driver.findElement(page.courtOrder_page.elements.courtOrderWidgetTitle).getText().then(function (title) {
                    expect(title).to.contain("Active court orders");
                    return helpers.gridGetElement(page.courtOrder_page.elements.courtOrderWidget, page.courtOrder_page.elements.courtOrderCreatedOrder, COTYPE)
                        .then(function (personFacetCO) {
                            personFacetCO.findElement(page.courtOrder_page.elements.courtOrderCreatedOrderTitle).getText().then(function (OrderCreatedOrderTitle) {
                                console.log('OrderCreatedOrderTitle : ', OrderCreatedOrderTitle);
                                expect(OrderCreatedOrderTitle).to.contain(COTYPE);
                            });
                            personFacetCO.findElement(page.courtOrder_page.elements.courtOrderCreatedOrderDate).getText().then(function (courtOrderDate) {
                                console.log('courtOrderDate : ', courtOrderDate);
                                //expect(OrderCreatedOrderTitle).to.contain(COTYPE);
                            });
                            return personFacetCO.findElement(page.courtOrder_page.elements.courtOrderCreatedOrderDate).isDisplayed();
                        });
                });
            });
    },

    verifyCourtOrderPage: function () {
        return driver.wait(until.elementsLocated(page.courtOrder_page.elements.courtOrderPage), 10000, "Court Order Page Not Visible").then(function () {
            return driver.wait(until.elementsLocated(page.courtOrder_page.elements.courtOrderNew), 10000);
        });
    },

    newCourtOrder: function () {
        return driver.wait(until.elementsLocated(page.courtOrder_page.elements.courtOrderNew), 10000).then(function () {
            return driver.findElement(page.courtOrder_page.elements.courtOrderNew).click().then(function () {
               // return driver.wait(until.elementsLocated(page.courtOrder_page.elements.newCOSection), 10000);
            });
        });
    },

    verifyNewCourtOrderSection: function () {
       // return driver.wait(until.elementsLocated(page.courtOrder_page.elements.newCOSection), 10000).then(function () {
            return driver.wait(until.elementsLocated(page.courtOrder_page.elements.newCOSectionTitle), 10000).then(function () {
                return driver.findElement(page.courtOrder_page.elements.newCOSectionTitle).getText().then(function (newCOSectionTitle) {
                    expect(newCOSectionTitle).to.contain("Add court order");
                    driver.wait(until.elementsLocated(page.courtOrder_page.elements.COTypeLabel), 10000);
                    driver.wait(until.elementsLocated(page.courtOrder_page.elements.COTypeDD), 10000);
                    driver.wait(until.elementsLocated(page.courtOrder_page.elements.CourtNameLabel), 10000);
                    driver.wait(until.elementsLocated(page.courtOrder_page.elements.CourtSearchOrg), 10000);
                    driver.wait(until.elementsLocated(page.courtOrder_page.elements.COReqDateLabel), 10000);
                    driver.wait(until.elementsLocated(page.courtOrder_page.elements.COReqDatePicker), 10000);
                   // driver.wait(until.elementsLocated(page.courtOrder_page.elements.COReqBYLabel), 10000);
                    // driver.wait(until.elementsLocated(page.courtOrder_page.elements.COReqBySearchProf), 10000);
                    // driver.wait(until.elementsLocated(page.courtOrder_page.elements.COReasonForReqLabel), 10000);
                    // driver.wait(until.elementsLocated(page.courtOrder_page.elements.COReasonText), 10000);
                    // driver.wait(until.elementsLocated(page.courtOrder_page.elements.COReqGrantedLabel), 10000);
                    // driver.wait(until.elementsLocated(page.courtOrder_page.elements.COReqGrantYes), 10000);
                    // driver.wait(until.elementsLocated(page.courtOrder_page.elements.COReqGrantNO), 10000);
                    return driver.wait(until.elementsLocated(page.courtOrder_page.elements.COReqGrantNotSpec), 10000);
                });
            });
       // });
    },

    createNewCourtOrder: function (COTYPE, COURT, PROFESSIONAL) {
        //console.log('in create Court Order');
        var date1 = new Date();

        var formatDate1 = dateFormat(date1, "dd/mm/yyyy");
        console.log('formatDate1 : ', formatDate1);

        return driver.wait(until.elementsLocated(page.courtOrder_page.elements.courtOrderNew), 10000).then(function () {
            return driver.findElement(page.courtOrder_page.elements.COTypeDD).click().then(function () {
                return driver.wait(until.elementsLocated(by.css('.selectize-dropdown.single')), 10000).then(function () {
                    return helpers.gridClick(by.css('.selectize-dropdown.single .selectize-dropdown-content'), by.css('div.option'), COTYPE).then(function () {
                        driver.findElement(page.courtOrder_page.elements.CourtSearchOrg).sendKeys(COURT);
                        
                        driver.wait(until.elementsLocated(page.courtOrder_page.elements.CourtSearchOrgList), 10000);
                        
                        return helpers.gridClick(page.courtOrder_page.elements.CourtSearchOrgList, page.courtOrder_page.elements.CourtSearchOrgListItem, COURT).then(function () {
                            driver.sleep(800);
                            driver.wait(until.elementsLocated(page.courtOrder_page.elements.CourtSearchOrgPill), 10000);
                            return driver.findElement(page.courtOrder_page.elements.COReqDatePicker).sendKeys(formatDate1).then(function () {
                               // driver.findElement(page.courtOrder_page.elements.COReqBYLabel).click();
                                return driver.findElement(page.courtOrder_page.elements.COReqBySearchProf).sendKeys(PROFESSIONAL).then(function () {
                                    //driver.wait(until.elementsLocated(by.css('div#searchPerson .selectize-dropdown div.selectize-dropdown-content .option')), 10000);
                                    //driver.wait(until.elementsLocated(page.courtOrder_page.elements.COReqBySearchDiv), 10000);
                                    driver.sleep(2000);
                                    return helpers.clickIncludesGrid(page.courtOrder_page.elements.COReqBySearchDiv, page.courtOrder_page.elements.COReqBySearchDivResult, PROFESSIONAL).then(function () {
                                        return driver.findElement(page.courtOrder_page.elements.COReasonText).sendKeys('Court Order Reason for ' + COURT).then(function () {
                                            driver.findElement(page.courtOrder_page.elements.COReqGrantNO).click();
                                            driver.findElement(page.courtOrder_page.elements.COReqGrantYes).click();
                                            return driver.findElement(page.courtOrder_page.elements.COReqGrantNotSpec).click();
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

    courtOrderSubmit: function () {
        driver.wait(until.elementsLocated(page.courtOrder_page.elements.CourtSearchOrgPill), 10000);
        return driver.findElement(page.courtOrder_page.elements.createOrderSubmit).click().then(function () {
            driver.sleep(10000);
        });
    },

    setOrderWithGrant: function () {
        //console.log('in create Court Order');        

        var date1 = new Date();

        var date2 = new Date();
        date2.setDate(date2.getDate() + 1);

        var date3 = new Date();
        date3.setDate(date3.getDate() + 3);

        var date4 = new Date();
        date4.setDate(date4.getDate() + 5);

        var date5 = new Date();
        date5.setDate(date5.getDate() + 4);

        var formatDate1 = dateFormat(date1, "dd/mm/yyyy");
        console.log('formatDate1 : ', formatDate1);
        var formatDate2 = dateFormat(date2, "dd/mm/yyyy");
        console.log('formatDate2 : ', formatDate2);
        var formatDate3 = dateFormat(date3, "dd/mm/yyyy");
        console.log('formatDate3 : ', formatDate3);
        var formatDate4 = dateFormat(date4, "dd/mm/yyyy");
        console.log('formatDate4 : ', formatDate4);
        var formatDate5 = dateFormat(date5, "dd/mm/yyyy");
        console.log('formatDate5 : ', formatDate5);

        return driver.findElement(page.courtOrder_page.elements.COReqGrantYes).click().then(function () {
            driver.wait(until.elementsLocated(page.courtOrder_page.elements.orderStartDateLbl), 10000);
            return driver.findElement(page.courtOrder_page.elements.orderStartDate).sendKeys(formatDate2).then(function () {
                driver.wait(until.elementsLocated(page.courtOrder_page.elements.orderEndDate), 10000);
                driver.findElement(page.courtOrder_page.elements.orderEndDate).sendKeys(formatDate3);
                driver.wait(until.elementsLocated(page.courtOrder_page.elements.oredrSayInput), 10000);
                driver.findElement(page.courtOrder_page.elements.oredrSayInput).sendKeys("Court Said Hahahahaha");

                driver.wait(until.elementsLocated(page.courtOrder_page.elements.COExtYes), 10000);
                driver.findElement(page.courtOrder_page.elements.COExtYes).click();

                driver.wait(until.elementsLocated(page.courtOrder_page.elements.orderExtUntillDt), 10000);
                driver.findElement(page.courtOrder_page.elements.orderExtUntillDt).sendKeys(formatDate4);
                driver.findElement(page.courtOrder_page.elements.orderExtReason).sendKeys("I am Extending your court order");

                driver.wait(until.elementsLocated(page.courtOrder_page.elements.CODischYes), 10000);
                driver.findElement(page.courtOrder_page.elements.CODischYes).click();

                driver.wait(until.elementsLocated(page.courtOrder_page.elements.orderExtUntillDt), 10000);
                driver.findElement(page.courtOrder_page.elements.orderDischargeDt).sendKeys(formatDate5);
                return driver.findElement(page.courtOrder_page.elements.orderDischargeReason).sendKeys("I am Discharging your court order");
            });
        });
    },

    setOrderNoDischg: function () {
        //console.log('in create Court Order');        

        var date1 = new Date();

        var date2 = new Date();
        date2.setDate(date2.getDate() + 1);

        var date3 = new Date();
        date3.setDate(date3.getDate() + 3);

        var date4 = new Date();
        date4.setDate(date4.getDate() + 5);

        var date5 = new Date();
        date5.setDate(date5.getDate() + 4);

        var formatDate1 = dateFormat(date1, "dd/mm/yyyy");
        console.log('formatDate1 : ', formatDate1);
        var formatDate2 = dateFormat(date2, "dd/mm/yyyy");
        console.log('formatDate2 : ', formatDate2);
        var formatDate3 = dateFormat(date3, "dd/mm/yyyy");
        console.log('formatDate3 : ', formatDate3);
        var formatDate4 = dateFormat(date4, "dd/mm/yyyy");
        console.log('formatDate4 : ', formatDate4);
        var formatDate5 = dateFormat(date5, "dd/mm/yyyy");
        console.log('formatDate5 : ', formatDate5);

        return driver.findElement(page.courtOrder_page.elements.COReqGrantYes).click().then(function () {
            driver.wait(until.elementsLocated(page.courtOrder_page.elements.orderStartDateLbl), 10000);
            return driver.findElement(page.courtOrder_page.elements.orderStartDate).sendKeys(formatDate2).then(function () {
                driver.sleep(800);
                driver.wait(until.elementsLocated(page.courtOrder_page.elements.orderEndDate), 10000);
                driver.findElement(page.courtOrder_page.elements.orderEndDate).sendKeys(formatDate3);
                driver.sleep(800);
                driver.wait(until.elementsLocated(page.courtOrder_page.elements.oredrSayInput), 10000);
                driver.findElement(page.courtOrder_page.elements.oredrSayInput).sendKeys("Court Said Hahahahaha");
                driver.sleep(800);
                driver.wait(until.elementsLocated(page.courtOrder_page.elements.COExtYes), 10000);
                driver.findElement(page.courtOrder_page.elements.COExtYes).click();
                driver.sleep(800);
                driver.wait(until.elementsLocated(page.courtOrder_page.elements.orderExtUntillDt), 10000);
                driver.findElement(page.courtOrder_page.elements.orderExtUntillDt).sendKeys(formatDate4);
                driver.sleep(800);
                driver.findElement(page.courtOrder_page.elements.orderExtReason).sendKeys("I am Extending your court order");

                driver.wait(until.elementsLocated(page.courtOrder_page.elements.CODischNO), 10000);
                driver.sleep(800);
                return driver.findElement(page.courtOrder_page.elements.CODischNO).click();

                // driver.wait(until.elementsLocated(page.courtOrder_page.elements.orderExtUntillDt), 10000);
                // driver.findElement(page.courtOrder_page.elements.orderDischargeDt).sendKeys(formatDate5);
                // return driver.findElement(page.courtOrder_page.elements.orderDischargeReason).sendKeys("I am Discharging your court order");
            });
        });
    },

    VerifyCreatedCourtOrder: function (COTYPE, COURT, PROFESSIONAL) {

        return driver.wait(until.elementsLocated(page.courtOrder_page.elements.createrCOContainer), 10000).then(function () {
            return driver.wait(until.elementsLocated(page.courtOrder_page.elements.createdOrderBlock), 10000).then(function () {
                return helpers.gridGetElement(page.courtOrder_page.elements.createrCOContainer, page.courtOrder_page.elements.createdOrderBlock, COTYPE).then(function (createdCO) {
                    // console.log('createdCO : ', createdWarningTitle);
                    createdCO.findElement(page.courtOrder_page.elements.createdOrderBlockOrderType).getText().then(function (coType) {
                        console.log('coType : ', coType);
                        expect(coType).to.contain(COTYPE);
                    });
                    createdCO.findElement(page.courtOrder_page.elements.createdOrderBlockCourtPill).getText().then(function (coCourt) {
                        console.log('coCourt : ', coCourt);
                        expect(coCourt).to.contain(COURT);
                    });
                    createdCO.findElement(page.courtOrder_page.elements.createdOrderBlockReqBy).getText().then(function (coReqBy) {
                        console.log('coReqBy : ', coReqBy);
                        expect(coReqBy).to.contain(PROFESSIONAL);
                    });

                    return createdCO.findElement(page.courtOrder_page.elements.createdOrderBlockMore).isDisplayed();
                });

            });
        });
    },

    expandToEditCO: function (COTYPE, COURT, PROFESSIONAL) {

        return driver.wait(until.elementsLocated(page.courtOrder_page.elements.createrCOContainer), 10000).then(function () {
            return driver.wait(until.elementsLocated(page.courtOrder_page.elements.createdOrderBlock), 10000).then(function () {
                return helpers.gridGetElement(page.courtOrder_page.elements.createrCOContainer, page.courtOrder_page.elements.createdOrderBlock, COTYPE).then(function (createdCO) {
                    // console.log('createdCO : ', createdWarningTitle);
                    createdCO.findElement(page.courtOrder_page.elements.createdOrderBlockOrderType).getText().then(function (coType) {
                        console.log('coType : ', coType);
                        expect(coType).to.contain(COTYPE);
                    });

                    //driver.wait(until.createdCO.findElement(page.courtOrder_page.elements.createdOrderBlockMore), 10000);
                    createdCO.findElement(page.courtOrder_page.elements.createdOrderBlockMore).click();
                    driver.sleep(800);

                    createdCO.findElement(page.courtOrder_page.elements.createdOrderBlockCourtPill).getText().then(function (coCourt) {
                        console.log('coCourt : ', coCourt);
                        expect(coCourt).to.contain(COURT);
                    });

                    createdCO.findElement(page.courtOrder_page.elements.createdOrderBlockReqBy).getText().then(function (coReqBy) {
                        console.log('coReqBy : ', coReqBy);
                        expect(coReqBy).to.contain(PROFESSIONAL);
                    });

                    return createdCO.findElement(page.courtOrder_page.elements.courtOrderBlockTable).isDisplayed();
                });
            });
        });
    },

    //verifyStatusDateinCO(COTYPE, COURT, PROFESSIONAL, coStatus)
    verifyStatusDateinCO: function (COTYPE, COURT, PROFESSIONAL, coStatus) {

        return driver.wait(until.elementsLocated(page.courtOrder_page.elements.createrCOContainer), 10000).then(function () {
            return driver.wait(until.elementsLocated(page.courtOrder_page.elements.createdOrderBlock), 10000).then(function () {
                return helpers.gridGetElement(page.courtOrder_page.elements.createrCOContainer, page.courtOrder_page.elements.createdOrderBlock, COTYPE).then(function (createdCO) {
                    // console.log('createdCO : ', createdWarningTitle);
                    driver.wait(createdCO.findElement(page.courtOrder_page.elements.courtOrderBlockTable));

                    if (coStatus.type == 'requested') {
                        console.log('requested');
                        createdCO.findElement(page.courtOrder_page.elements.courtOrderBlockReqStatus).getText().then(function (ReqStatus) {
                            console.log('ReqStatus : ', ReqStatus);
                            expect(ReqStatus).to.contain('Requested');
                            expect(ReqStatus).to.contain(coStatus.date);
                            expect(ReqStatus).to.contain('Court Order Reason for ' + COURT);
                        });
                    }
                    else if (coStatus.type == 'rejected') {
                        console.log('rejected');
                        createdCO.findElement(page.courtOrder_page.elements.courtOrderBlockRejectStatus).getText().then(function (ReqStatus) {
                            console.log('ReqStatus : ', ReqStatus);
                            expect(ReqStatus).to.contain('Rejected');
                            expect(ReqStatus).to.contain(coStatus.date);
                            expect(ReqStatus).to.contain('Court Order Reason for ' + COURT);
                        });
                    }
                    else if (coStatus.type == 'granted') {
                        console.log('granted');
                        createdCO.findElement(page.courtOrder_page.elements.courtOrderBlockGrantStatus).getText().then(function (ReqStatus) {
                            console.log('ReqStatus : ', ReqStatus);
                            expect(ReqStatus).to.contain('Granted');
                            expect(ReqStatus).to.contain(coStatus.date);//from to date
                            expect(ReqStatus).to.contain('Court Order Reason for ' + COURT);
                        });
                    }
                    else if (coStatus.type == 'extended') {
                        console.log('extended');
                        createdCO.findElement(page.courtOrder_page.elements.courtOrderBlockExtStatus).getText().then(function (ReqStatus) {
                            console.log('ReqStatus : ', ReqStatus);
                            expect(ReqStatus).to.contain('Extended');
                            expect(ReqStatus).to.contain(coStatus.date);
                            expect(ReqStatus).to.contain('Court Order Reason for ' + COURT);
                        });
                    }
                    else if (coStatus.type == 'discharged') {
                        console.log('discharged');
                        createdCO.findElement(page.courtOrder_page.elements.courtOrderBlockDisEarlyStatus).getText().then(function (ReqStatus) {
                            console.log('ReqStatus : ', ReqStatus);
                            expect(ReqStatus).to.contain('Discharged');
                            expect(ReqStatus).to.contain(coStatus.date);
                            expect(ReqStatus).to.contain('Court Order Reason for ' + COURT);
                        });
                    }
                    return createdCO.findElement(page.courtOrder_page.elements.courtOrderBlockTable).isDisplayed();
                });
            });
        });
    },

    editCourtOrder: function (COTYPE, COURT, PROFESSIONAL) {
        //console.log('in create Court Order');
        var date1 = new Date();
        date1.setDate(date1.getDate() - 1);

        var formatDate1 = dateFormat(date1, "dd/mm/yyyy");
        console.log('Edit Date : ', formatDate1);
        return driver.wait(until.elementsLocated(page.courtOrder_page.elements.courtOrderEditIcon), 10000).then(function () {
            return driver.findElement(page.courtOrder_page.elements.courtOrderEditIcon).click().then(function () {
                return driver.wait(until.elementsLocated(page.courtOrder_page.elements.searchOrgLabel), 10000).then(function () {
                    // return driver.findElement(page.courtOrder_page.elements.COTypeDD).click().then(function () {
                    // return driver.wait(until.elementsLocated(by.css('.selectize-dropdown.single')), 10000).then(function () {
                    // return helpers.gridClick(by.css('.selectize-dropdown.single .selectize-dropdown-content'), by.css('div.option'), COTYPE).then(function () {
                    // driver.findElement(page.courtOrder_page.elements.CourtSearchOrg).sendKeys(COURT);
                    // driver.wait(until.elementsLocated(page.courtOrder_page.elements.CourtSearchOrgList), 10000);
                    // driver.sleep(1000);
                    // return helpers.gridClick(page.courtOrder_page.elements.CourtSearchOrgList, page.courtOrder_page.elements.CourtSearchOrgListItem, COURT).then(function () {
                    // driver.sleep(800);
                    // driver.wait(until.elementsLocated(page.courtOrder_page.elements.CourtSearchOrgPill), 10000);
                    // driver.findElement(page.courtOrder_page.elements.COReqDatePicker).click();
                    driver.findElement(page.courtOrder_page.elements.COReqDatePicker).clear();
                    return driver.findElement(page.courtOrder_page.elements.COReqDatePicker).sendKeys(formatDate1).then(function () {
                      //  driver.findElement(page.courtOrder_page.elements.COReqBYLabel).click();
                        //   return driver.findElement(page.courtOrder_page.elements.COReqBySearchProf).sendKeys(PROFESSIONAL).then(function () {
                        //       driver.wait(until.elementsLocated(by.css('div#searchPerson .selectize-dropdown div.selectize-dropdown-content .option')), 10000);
                        //       driver.sleep(800);
                        //    return helpers.clickIncludesGrid(page.courtOrder_page.elements.COReqBySearchProfList, page.courtOrder_page.elements.COReqBySearchProfListItem, PROFESSIONAL).then(function () {
                        //         return driver.findElement(page.courtOrder_page.elements.COReasonText).sendKeys('Court Order Reason for ' + COURT).then(function () {
                        // driver.findElement(page.courtOrder_page.elements.COReqGrantNO).click();
                        // return driver.findElement(page.courtOrder_page.elements.COReqGrantYes).click();
                        return driver.findElement(page.courtOrder_page.elements.COReqGrantNotSpec).click();
                        // return driver.sleep(3000);
                    });
                });
            });
        });
    },

    verifyCOreqOnDt: function (COTYPE, COURT, PROFESSIONAL) {
        return driver.wait(until.elementsLocated(page.courtOrder_page.elements.createrCOContainer), 10000).then(function () {
            return driver.wait(until.elementsLocated(page.courtOrder_page.elements.createdOrderBlock), 10000).then(function () {
                return helpers.gridGetElement(page.courtOrder_page.elements.createrCOContainer, page.courtOrder_page.elements.createdOrderBlock, COTYPE).then(function (createdCO) {
                    createdCO.findElement(page.courtOrder_page.elements.createdOrderBlockRequestedOnDt).isDisplayed();
                });
            });
        });
    },

    verifyCODischOnDt: function (COTYPE, COURT, PROFESSIONAL) {
        return driver.wait(until.elementsLocated(page.courtOrder_page.elements.createrCOContainer), 10000).then(function () {
            return driver.wait(until.elementsLocated(page.courtOrder_page.elements.createdOrderBlock), 10000).then(function () {
                return helpers.gridGetElement(page.courtOrder_page.elements.createrCOContainer, page.courtOrder_page.elements.createdOrderBlock, COTYPE).then(function (createdCO) {
                    // console.log('createdCO : ', createdWarningTitle);
                    return createdCO.findElement(page.courtOrder_page.elements.createdOrderBlockDischgOnDt).isDisplayed();
                });

            });
        });
    },

    verifyCOExtUntilDt: function (COTYPE, COURT, PROFESSIONAL) {
        return driver.wait(until.elementsLocated(page.courtOrder_page.elements.createrCOContainer), 10000).then(function () {
            return driver.wait(until.elementsLocated(page.courtOrder_page.elements.createdOrderBlock), 10000).then(function () {
                return helpers.gridGetElement(page.courtOrder_page.elements.createrCOContainer, page.courtOrder_page.elements.createdOrderBlock, COTYPE).then(function (createdCO) {
                    // console.log('createdCO : ', createdWarningTitle);
                    return createdCO.findElement(page.courtOrder_page.elements.createdOrderBlockExtUntilDt).isDisplayed();
                });

            });
        });
    },

}
