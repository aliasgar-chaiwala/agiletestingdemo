module.exports = {
    elements: {
        dropDownlinkApprovalRequest: by.css('h2[class="page-title dropdown open"] ul[data-bind="visible:!showNavBar"] li:nth-child(3) a[role="menuitem"]'),
        approvalReqHeadContainer: by.css('div.app-tabs.container-fluid.page-content'),
        approvalReqHeadTitle: by.css('h2.page-title.dropdown div.take-action-dropdown span[class="m-l-sm"]'),
        approvalForTitle: by.css('#page-content-wrapper div > h2:nth-child(1) > span:nth-child(1)'),
        approvalforlabel: by.css('div[name="approvalSubPage"] table[name="approvalList"] th:nth-child(1) > span'),
        submittedBylabel: by.css('div[name="approvalSubPage"] table[name="approvalList"] th:nth-child(2) > span'),
        requestedOnlabel: by.css('div[name="approvalSubPage"] table[name="approvalList"] th:nth-child(3) > span'),
        subjectApplabel: by.css('div[name="approvalSubPage"] table[name="approvalList"] th:nth-child(4) > span'),
        endDeadlinelabel: by.css('div[name="approvalSubPage"] table[name="approvalList"] th:nth-child(6) > span'),
        firstApprReq: by.css('div[name="approvalSubPage"] table[name="approvalList"] tbody tr:nth-child(1)'),
        approvalFormList: by.css('div[name="approvalSubPage"] table[name="approvalList"]'),
        approvalFormListRow: by.css('tbody tr'),
        approvalListFormName: by.css('td a[data-bind*="itemId"]'),
        approvalListItem1FormName: by.css('td a[data-bind*="itemId"]:nth-child(2)'),
        caseOwnerApplabel: by.css('div[name="approvalSubPage"] table[name="approvalList"] th:nth-child(5) > span'),

    },

    navigateApprovalRequestPage: function () {
        return driver.wait(until.elementLocated(page.tmDashboard_page.elements.navigationCaret), 15000).then(function () {
            return driver.findElement(page.tmDashboard_page.elements.navigationCaret).click().then(function () {
                driver.wait(until.elementLocated(page.approvalRequest_page.elements.dropDownlinkApprovalRequest), 15000);
                //console.log("in");
                return driver.findElement(page.approvalRequest_page.elements.dropDownlinkApprovalRequest).click().then(function () {
                    //console.log("verify");
                    return driver.wait(until.elementsLocated(page.approvalRequest_page.elements.approvalReqHeadContainer), 10000).then(function () {
                        //console.log("in verifySidepaneDashboard");
                        return driver.wait(until.elementsLocated(page.approvalRequest_page.elements.approvalReqHeadTitle), 10000).then(function () {
                            return driver.findElement(page.approvalRequest_page.elements.approvalReqHeadTitle).getText().then(function (titleText) {
                                //console.log("in verifySidepaneDashboard");
                                expect(titleText).to.contain('Approval requests in');
                            });
                        });
                    });
                });
            });
        });

    },

    verifyfieldsApprovalRequestPage: function () {
        return driver.wait(until.elementsLocated(page.approvalRequest_page.elements.approvalforlabel), 20000).then(function () {
            return driver.findElement(page.approvalRequest_page.elements.approvalforlabel).getText().then(function (approvalLabel) {
                expect(approvalLabel).to.equal("Approval for");
                return driver.wait(until.elementsLocated(page.approvalRequest_page.elements.submittedBylabel), 2000).then(function () {
                    return driver.findElement(page.approvalRequest_page.elements.submittedBylabel).getText().then(function (submittedLabel) {
                        expect(submittedLabel).to.equal("Submitted by");
                        return driver.wait(until.elementsLocated(page.approvalRequest_page.elements.requestedOnlabel), 2000).then(function () {
                            return driver.findElement(page.approvalRequest_page.elements.requestedOnlabel).getText().then(function (requestedLabel) {
                                expect(requestedLabel).to.equal("Requested on");
                                return driver.wait(until.elementsLocated(page.approvalRequest_page.elements.subjectApplabel), 2000).then(function () {
                                    return driver.findElement(page.approvalRequest_page.elements.subjectApplabel).getText().then(function (subjectLabel) {
                                        return expect(subjectLabel).to.equal("Subject");
                                        return driver.wait(until.elementsLocated(page.approvalRequest_page.elements.caseOwnerApplabel), 2000).then(function () {
                                            return driver.findElement(page.approvalRequest_page.elements.caseOwnerApplabel).getText().then(function (caseownerLabel) {
                                                return expect(caseownerLabel).to.equal("Case Owner");
                                                return driver.wait(until.elementsLocated(page.approvalRequest_page.elements.endDeadlinelabel), 2000).then(function () {
                                                    return driver.findElement(page.approvalRequest_page.elements.endDeadlinelabel).getText().then(function (endDateLabel) {
                                                        return expect(endDateLabel).to.equal("End deadline");
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
    clickApprovalForm: function (formName, USERNAME, CASE) {
        return driver.wait(until.elementsLocated(page.approvalRequest_page.elements.firstApprReq), 10000).then(function () {
            return driver.findElement(page.approvalRequest_page.elements.firstApprReq).getText().then(function (firstApprReqSTR) {
                console.log('firstApprReqSTR :', firstApprReqSTR);
                return driver.sleep(3000).then(function () {
                    var myString = formName + ' ' + USERNAME + ' Today ' + CASE;
                    console.log('myString :', myString);

                    return helpers.gridGetElement(page.approvalRequest_page.elements.approvalFormList, page.approvalRequest_page.elements.approvalFormListRow, myString).then(function (approvalRow) {

                        return approvalRow.getText().then(function (rowText) {

                            expect(rowText).to.equal(myString);

                            approvalRow.findElement(page.approvalRequest_page.elements.approvalListFormName).click();
                            return driver.sleep(3000);
                        });
                    });
                });
            })
        })
    },

    ApprovFormWithCaseOwner: function (formName, USERNAME, CASE, CaseOwner) {
        return driver.wait(until.elementsLocated(page.approvalRequest_page.elements.firstApprReq), 10000).then(function () {
            return driver.findElement(page.approvalRequest_page.elements.firstApprReq).getText().then(function (firstApprReqSTR) {
                console.log('firstApprReqSTR :', firstApprReqSTR);
                return driver.sleep(3000).then(function () {
                    var myString = formName + ' ' + USERNAME + ' Today ' + CASE + ' ' + CaseOwner + ' Today';
                    console.log('myString :', myString);
                    driver.sleep(3000);
                    return helpers.gridGetElement(page.approvalRequest_page.elements.approvalFormList, page.approvalRequest_page.elements.approvalFormListRow, myString).then(function (approvalRow) {
                        approvalRow.findElement(page.approvalRequest_page.elements.approvalListFormName).click();
                        return driver.sleep(3000);
                    });
                });
            });
        });
    },
    clickApprovalFormTwoCase: function (formName, USERNAME, CASE1, CASE2) {
        return driver.wait(until.elementsLocated(page.approvalRequest_page.elements.firstApprReq), 10000).then(function () {
            return driver.findElement(page.approvalRequest_page.elements.firstApprReq).getText().then(function (firstApprReqSTR) {
                console.log('firstApprReqSTR :', firstApprReqSTR);
                return driver.sleep(3000).then(function () {
                    var myString = formName + ' ' + USERNAME + ' Today ' + CASE1 + ' ' + CASE2;
                    console.log('myString :', myString);

                    return helpers.gridGetElementApprovalRequest(page.approvalRequest_page.elements.approvalFormList, page.approvalRequest_page.elements.approvalFormListRow, myString).then(function (approvalRow) {

                        return approvalRow.getText().then(function (rowText) {
                            rowText = rowText.replace('\n', ' ');
                            expect(rowText).to.contains(myString);

                            approvalRow.findElement(page.approvalRequest_page.elements.approvalListItem1FormName).click();
                            return driver.sleep(3000);
                        });
                    });
                });
            })
        })
    }

}
