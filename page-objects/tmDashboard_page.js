module.exports = {

    //  url: 'https://www.google.co.in/[a-zA-Z0-9\-_?=]+',
    elements: {
        teamDetails: by.css('div[class="app-tabs container-fluid page-content"]'),
        userName: by.css('div[class="sidebar-nav"] strong[class="font-big"]'),
        sidePane: by.css('div[id="sidebar-wrapper"]'),

        sidepaneToady: by.css('div[class="dashboard-section-title"]'),
        sidepaneTomorrow: by.css('div[class="dashboard-section-title"]'),
        sidepaneRestOW: by.css('div[class="dashboard-section-title"]'),

        paneWorkload: by.css('a[href="#workload"]'),
        paneTasks: by.css('div[id="todayPanel"] a[data-target="#tasksToday"]'),
        paneAppointment: by.css('div[id="todayPanel"] a[data-target="#appointmentsToday"]'),
        paneMessage: by.css('div[id="todayPanel"]'),

        paneForms: by.css('a[aria-controls="forms"]'),
        paneFormContainer: by.css('.tab-content div[id="forms"] ul.dashboard-ul.list-group'), //'div[id="forms"] ul.dashboard-ul.list-group'),

        navigationCaret: by.css('#dropdownMenu1 i'),
        dropDownlinkCasesIn: by.css('h2.page-title.dropdown.open ul[data-bind="visible:!showNavBar"] li:nth-child(1) a[role="menuitem"]'), //':contains("Cases")'),
        dropDownlinkApprovalReq: by.css('h2.page-title.dropdown.open ul[data-bind="visible:!showNavBar"] li:nth-child(3) a[role="menuitem"]'),
        dropDownlinkUnassigned: by.css('h2.page-title.dropdown.open ul[data-bind="visible:!showNavBar"] li:nth-child(2) a[role="menuitem"]'),
        casesInListPanel: by.css('.my-teams-member-panel'),

        unassaginedWLHeadContainer: by.css('div.app-tabs.container-fluid.page-content'),
        unassaginedWLHeadTitle: by.css('h2.page-title'),
        unassignedCaseCount: by.css('div.app-tabs.container-fluid.page-content button.btn-info strong'),
        unassignedWorkListBlocks: by.css('div[class="app-info-block cases unassigned-workload"]'),

        //approvalListTable: by.css('table[class="table table-bordered table-hover"]'),
        approvalListTable: by.css('table[data-sort-name="requested_on"]'),
        formApprove: by.css('#page-content-wrapper .table > tbody > tr > td:nth-child(2) > a'),
        unassignedWorkloadThroughAR: by.css('h2[class="page-title dropdown open"] ul[data-bind="visible:!showNavBar"] li:nth-child(3) a[role="menuitem"]'),
        caseVisible: by.css('.app-info-block.cases'),

        clickOnAllocateButton: by.css('[name="btnTransfercase"]'),
        chooseSWCaret: by.css('.transperent-bg span.caret'),
        setSW: by.css('div.panel-collapse.collapse.in ul > li:nth-child(1) > a > span:nth-child(2)'),
        approveAllocate: by.css('div.panel-collapse.collapse.in i.icon-mini.icon-thik-tick.m-l-sm.m-t-xs.pull-right.pointer'),
        navigationCaretThroughAR: by.css('#dropdownMenu1'),
        homeIcon: by.css('.nav-img-home'),
        dashboardMe: by.css('.me-container a.nav-icon.nav-icon-me'),
        dashboardMeDropdown: by.css('.me-container div.dropdown-me.open'),
        dashboardMeDropdownListItem: by.css('li'),
        //------------------------------------for case allocation grid---------------------
        allocMainBlock: by.css('div[class="col-sm-12 clearfix"]'),
        unAsgWLCaseBlock: by.css('div[class="app-info-block cases unassigned-workload"]'),
        unAsgWLCaseBlockCaseName: by.css('span.given-name.pointer'),
        allocateButton: by.css('[name="btnTransfercase"]'), //--------------name to be changed to btnAllocateCase'
        allocateButton1: by.css('#personBar0 > div.app-info-block-section > div.col-sm-12 > div > div > div > span'),
        allocateCollapsePanel: by.css('.panel-collapse.collapse.in'),
        allocateToCaret: by.css('.panel-collapse.collapse.in span.caret'),
        workerList: by.css('.panel-collapse.collapse.in ul.dropdown-menu-new'),
        workerList: by.css('li a'), // pass worker name to allocate the case
        allocateTick: by.css('.panel-collapse.collapse.in i.icon-thik-tick'),
        //-------------My Team App----------------
        appsIcon: by.css('div a.nav-icon.nav-icon-apps'),
        appsMyteam: by.css('#htAppContainer a.ht-app.ht-app-teams'),
        teamMemBersBlock: by.css('div.my-teams-member-group'),
        teamMemBersBlockAccord: by.css('span.arrow.collapsed a.accordion-toggle'),
        workerTabCaseCount: by.css('div.worker-tabs.nav-pills a.worker-pill.cases-tabs1.active span'),
        workerTabCaseBlock: by.css('.caseContainer .app-info-block.cases.unassigned-workload'),
        memCaseCountLbl: by.css('div.app-tabs.container-fluid.page-content .caseload-dropdown'),
    },

    // titleContains: function () {

    // 	return driver.getTitle().then(function (pageTitle) {
    // 		expect(pageTitle).to.contain("Person | One Social Care");
    // 	});
    // },
    navigateMyProfile: function () {
        return driver.wait(until.elementLocated(page.tmDashboard_page.elements.sidePane), 25000).then(function () {
            return driver.getTitle().then(function (pageTitle) {
                expect(pageTitle).to.contain("Dashboard | One Social Care");
                return driver.findElement(page.tmDashboard_page.elements.dashboardMe).then(function (MeIcon) {
                    driver.actions().mouseMove(MeIcon).perform();
                    return driver.wait(until.elementLocated(page.tmDashboard_page.elements.dashboardMeDropdown), 10000).then(function () {
                        helpers.clickIncludesGrid(page.tmDashboard_page.elements.dashboardMeDropdown, page.tmDashboard_page.elements.dashboardMeDropdownListItem, "My Profile")
                        return driver.sleep(1500);
                    });
                });
            });
        });
    },

    VerifyTmDashboardName: function (USERNAME) {

        return driver.wait(until.elementLocated(page.tmDashboard_page.elements.sidePane), 25000)
            .then(function () {
                return driver.getTitle().then(function (pageTitle) {
                    return expect(pageTitle).to.contain("Team | One Social Care")
                })
                    .then(function () {
                        return driver.wait(until.elementLocated(page.tmDashboard_page.elements.userName), 10000)
                            .then(function () {
                                return driver.findElement(page.tmDashboard_page.elements.userName).getText()
                                    .then(function (userName) {
                                        return expect(userName).to.contain(USERNAME)
                                    });
                            });
                    });
            });

    },

    verifySidepaneDashboard: function () {
        //I should see side pane on dashboard
        //console.log("in verifySidepaneDashboard");
        return driver.wait(until.elementLocated(page.tmDashboard_page.elements.sidePane), 25000);
    },

    verifyTmDashboardPaneWorkload: function () {
        //console.log("in VerifyTmDashboardSidePaneWorkload");

        return driver.wait(until.elementLocated(page.tmDashboard_page.elements.paneWorkload), 25000)
            .then(function () {
                //console.log('in fw');
                driver.findElement(page.tmDashboard_page.elements.sidepaneToady).isDisplayed()
                    .then(function (element) {
                        //console.log('firstassert');
                        assert.equal(element, true, "sidepaneToady not visible");
                    });
                driver.findElement(page.tmDashboard_page.elements.sidepaneTomorrow).isDisplayed()
                    .then(function (element) {
                        //console.log('Secondtassert');
                        assert.equal(element, true, "sidepaneTomorrow not visible");
                    });
                return driver.findElement(page.tmDashboard_page.elements.sidepaneRestOW)
                    .isDisplayed().then(function (element) {
                        //console.log('thirdassert');
                        assert.equal(element, true, "sidepaneRestOW not visible");
                        // return driver.wait(until.elementLocated(page.tmDashboard_page.elements.paneTasks), 25000);
                        // .then(function () {
                        // 	driver.findElement(page.tmDashboard_page.elements.paneTasks);
                        // 	driver.findElement(page.tmDashboard_page.elements.paneAppointment);
                        // 	return driver.findElement(page.tmDashboard_page.elements.paneMessage);
                        // });
                    });
            });
    },

    verifyTmDashboardSidePaneForms: function () {
        //console.log("VerifyTmDashboardSidePaneForms");

        return driver.wait(until.elementLocated(page.tmDashboard_page.elements.paneForms), 25000).then(function () {
            driver.findElement(page.tmDashboard_page.elements.paneForms).click().then(function () {

                return driver.wait(until.elementLocated(page.tmDashboard_page.elements.paneFormContainer), 15000);
            });
        });

    },

    verifyTmDashboardMemberList: function () {
        //console.log("verifyTmDashboardMemberList");

        return driver.wait(until.elementLocated(page.tmDashboard_page.elements.teamDetails), 25000);
    },

    verifytmCasesInPage: function () {
        //console.log("verifytmCasesInPage");
        driver.sleep(1000);
        return driver.wait(until.elementLocated(page.tmDashboard_page.elements.teamDetails), 25000).then(function () {
            return driver.findElement(page.tmDashboard_page.elements.navigationCaret).click().then(function () {
                //console.log('in caret click');
                return driver.findElement(page.tmDashboard_page.elements.dropDownlinkCasesIn).click().then(function () {

                    return driver.wait(until.elementLocated(page.tmDashboard_page.elements.casesInListPanel), 10000).then(function () {

                        driver.findElement(page.tmDashboard_page.elements.casesInListPanel).isDisplayed().then(function (element) {
                            //console.log('casesInListPanel is displayed');
                            assert.equal(element, true, "casesInListPanel not visible");
                        });
                        return driver.navigate().back();
                    });
                });
            });
        });
    },

    verifytmUnassignedWorkloadPage: function () {
        // console.log("verifytmApprovalsRequestsPage");
        driver.sleep(1000);
        return driver.wait(until.elementLocated(page.tmDashboard_page.elements.teamDetails), 25000).then(function () {
            return driver.findElement(page.tmDashboard_page.elements.navigationCaret).click().then(function () {
                // console.log('in caret click');
                return driver.findElement(page.tmDashboard_page.elements.dropDownlinkUnassigned).click().then(function () {
                    return driver.wait(until.elementsLocated(page.tmDashboard_page.elements.unassaginedWLHeadContainer), 10000).then(function () {
                        helpers.gridGetText(page.tmDashboard_page.elements.unassaginedWLHeadContainer, page.tmDashboard_page.elements.unassaginedWLHeadTitle, 'Unassigned Workload')
                            .then(function (titleText) {
                                expect(titleText).to.contain('Unassigned Workload');
                            });
                        return driver.sleep(3000).then(function () {
                            return driver.findElement(page.tmDashboard_page.elements.unassignedCaseCount).getText().then(function (CaseCount) {
                                //console.log('\n unassignedCaseCount :', CaseCount);
                                if (CaseCount > 0) {
                                    driver.wait(until.elementsLocated(page.tmDashboard_page.elements.unassignedWorkListBlocks), 10000).then(function () {
                                        driver.findElement(page.tmDashboard_page.elements.unassignedWorkListBlocks).isDisplayed().then(function (element) {
                                            //console.log('casesInListPanel is displayed');
                                            assert.equal(element, true, "unassignedWorkListBlocks not visible");
                                        });
                                    });
                                }
                                return driver.navigate().back();
                            });
                        });
                    });
                });
            });
        });
    },

    verifytmApprovalsRequestsPage: function () {
        //console.log("verifytmUnassignedWorkloadPage");
        return driver.wait(until.elementLocated(page.tmDashboard_page.elements.teamDetails), 25000).then(function () {
            return driver.findElement(page.tmDashboard_page.elements.navigationCaret).click().then(function () {
                //console.log('in caret click');
                return driver.findElement(page.tmDashboard_page.elements.dropDownlinkApprovalReq).click().then(function () {
                    return driver.wait(until.elementLocated(page.tmDashboard_page.elements.approvalListTable), 10000).then(function () {

                        driver.findElement(page.tmDashboard_page.elements.approvalListTable).isDisplayed().then(function (element) {
                            //console.log('casesInListPanel is displayed');
                            assert.equal(element, true, "approvalListTable not visible");
                        });
                        return driver.navigate().back();
                    });
                });
            });
        });
    },

    tmApprovesForm: function () {
        return driver.wait(until.elementLocated(page.tmDashboard_page.elements.teamDetails), 25000).then(function () {
            return driver.findElement(page.tmDashboard_page.elements.navigationCaret).click().then(function () {
                return driver.findElement(page.tmDashboard_page.elements.dropDownlinkApprovalReq).click().then(function () {
                    return driver.wait(until.elementsLocated(page.tmDashboard_page.elements.formApprove), 10000).then(function () {
                        return driver.findElement(page.tmDashboard_page.elements.formApprove).isDisplayed().then(function () {
                            driver.sleep(2000);
                            driver.findElement(page.tmDashboard_page.elements.formApprove).click();
                            return driver.sleep(2000)
                        });
                    });
                });
            });
        });
    },

    case2Allocation: function (swName) {
        driver.findElement(page.tmDashboard_page.elements.homeIcon).click();
        driver.sleep(2000);
        return driver.wait(until.elementLocated(page.tmDashboard_page.elements.navigationCaret), 15000).then(function () {
            return driver.findElement(page.tmDashboard_page.elements.navigationCaret).click()
                .then(function () {
                    driver.wait(until.elementLocated(page.tmDashboard_page.elements.dropDownlinkUnassigned), 15000);
                    driver.findElement(page.tmDashboard_page.elements.dropDownlinkUnassigned).click();
                    return driver.sleep(4000);
                }).then(function () {
                    return driver.wait(until.elementsLocated(page.tmDashboard_page.elements.unAsgWLCaseBlockCaseName), 15000, "unAsgWLCaseBlockCaseName locator not available").then(function () {
                        config = jsonfile.readFileSync('./support/' + featureConfig);
                        var person = config.PersonDetails.person2.Name;
                        // driver.findElement(page.tmDashboard_page.elements.allocateButton1).click();
                        return helpers.gridunAssignedAllocation(page.tmDashboard_page.elements.allocMainBlock, page.tmDashboard_page.elements.unAsgWLCaseBlock, page.tmDashboard_page.elements.unAsgWLCaseBlockCaseName, person, swName).then(function () {
                            return driver.sleep(1500).then(function () {
                                driver.findElement(page.tmDashboard_page.elements.allocateTick).click();
                                return driver.sleep(3000);
                            });
                        });
                    });
                });
        });
    },

    case3Allocation: function (swName) {
        driver.findElement(page.tmDashboard_page.elements.homeIcon).click();
        return driver.wait(until.elementLocated(page.tmDashboard_page.elements.navigationCaret), 15000).then(function () {
            return driver.findElement(page.tmDashboard_page.elements.navigationCaret).click()
                .then(function () {
                    driver.wait(until.elementLocated(page.tmDashboard_page.elements.dropDownlinkUnassigned), 15000);
                    return driver.findElement(page.tmDashboard_page.elements.dropDownlinkUnassigned).click();
                })
                .then(function () {
                    return driver.wait(until.elementsLocated(page.tmDashboard_page.elements.unAsgWLCaseBlockCaseName), 15000, "unAsgWLCaseBlockCaseName not available").then(function () {
                        config = jsonfile.readFileSync('./support/' + featureConfig);
                        var person = config.PersonDetails.person3.Name;
                        console.log("swName: ", swName);
                        return helpers.gridunAssignedAllocation(page.tmDashboard_page.elements.allocMainBlock, page.tmDashboard_page.elements.unAsgWLCaseBlock, page.tmDashboard_page.elements.unAsgWLCaseBlockCaseName, person, swName)
                            .then(function () {
                                driver.findElement(page.tmDashboard_page.elements.allocateTick).click();
                                return driver.sleep(3000);
                            });
                    });
                });
        });
    },

    case1Allocation: function (swName) {
        driver.findElement(page.tmDashboard_page.elements.homeIcon).click();
        return driver.wait(until.elementLocated(page.tmDashboard_page.elements.navigationCaret), 15000).then(function () {
            return driver.findElement(page.tmDashboard_page.elements.navigationCaret).click()
                .then(function () {
                    driver.wait(until.elementLocated(page.tmDashboard_page.elements.dropDownlinkUnassigned), 15000);
                    return driver.findElement(page.tmDashboard_page.elements.dropDownlinkUnassigned).click();
                })
                .then(function () {
                    return driver.wait(until.elementsLocated(page.tmDashboard_page.elements.unAsgWLCaseBlockCaseName), 15000, "unAsgWLCaseBlockCaseName not available").then(function () {
                        config = jsonfile.readFileSync('./support/' + featureConfig);
                        var person = config.PersonDetails.person1.Name;
                        return helpers.gridunAssignedAllocation(page.tmDashboard_page.elements.allocMainBlock, page.tmDashboard_page.elements.unAsgWLCaseBlock, page.tmDashboard_page.elements.unAsgWLCaseBlockCaseName, person, swName)
                            .then(function () {
                                driver.findElement(page.tmDashboard_page.elements.allocateTick).click();
                                return driver.sleep(3000);
                            });
                    });
                });
        });

    },

    caseAllocation: function (swName) {
        driver.sleep(10000);
        return driver.wait(until.elementLocated(page.tmDashboard_page.elements.homeIcon), 20000).then(function () {
            driver.findElement(page.tmDashboard_page.elements.homeIcon).click();
            // driver.sleep(3000);
            console.log('casesInListPanel is displayed')
            return driver.wait(until.elementLocated(page.tmDashboard_page.elements.navigationCaret), 20000).then(function () {
                console.log('casesInListPanel is displayed')
                return driver.findElement(page.tmDashboard_page.elements.navigationCaret).click().then(function () {
                    console.log('casesInListPanel is displayed')
                    driver.wait(until.elementLocated(page.tmDashboard_page.elements.dropDownlinkUnassigned), 15000);
                    driver.findElement(page.tmDashboard_page.elements.dropDownlinkUnassigned).click();
                    return driver.sleep(5000).then(function () {
                        return driver.wait(until.elementsLocated(page.tmDashboard_page.elements.unAsgWLCaseBlockCaseName), 15000, "unAsgWLCaseBlockCaseName not available").then(function () {
                            config = jsonfile.readFileSync('./support/' + featureConfig);
                            var person = config.PersonDetails.Name;
                            console.log('sfsnf is displayed')
                            return helpers.gridunAssignedAllocation(page.tmDashboard_page.elements.allocMainBlock, page.tmDashboard_page.elements.unAsgWLCaseBlock, page.tmDashboard_page.elements.unAsgWLCaseBlockCaseName, person, swName).then(function () {
                                driver.findElement(page.tmDashboard_page.elements.allocateTick).click();
                                return driver.sleep(3000);
                            });
                        });
                    });
                });
            });
        });

    },

    clickHomeIcon: function () {
        return driver.wait(until.elementLocated(page.tmDashboard_page.elements.homeIcon), 15000).then(function () {
            return driver.findElement(page.tmDashboard_page.elements.homeIcon).click();
        });
    },

    /**appsIcon: by.css('div a.nav-icon.nav-icon-apps'),
        appsMyteam:by.css('#htAppContainer a.ht-app.ht-app-teams'),
        teamMemBersBlock:by.css('div.my-teams-member-group'),
        teamMemBersBlockAccord:by.css('span.arrow.collapsed a.accordion-toggle'),
        workerTabCaseCount : by.css('div.worker-tabs.nav-pills a.worker-pill.cases-tabs1.active span'),
        workerTabCaseBlock:by.css('.caseContainer .app-info-block.cases.unassigned-workload')
         */

    navigateMyTeam: function () {
        driver.sleep(150);
        return driver.wait(until.elementLocated(page.tmDashboard_page.elements.appsIcon), 15000).then(function () {
            console.log(1);
            return driver.findElement(page.tmDashboard_page.elements.appsIcon).then(function (AppsHover) {
                console.log(2);
                return driver.actions().mouseMove(AppsHover).perform();
            }).then(function () {
                driver.sleep(1000);
                console.log(3);
                return driver.wait(until.elementLocated(page.tmDashboard_page.elements.appsMyteam), 15000).then(function () {
                    console.log(4);
                    return driver.findElement(page.tmDashboard_page.elements.appsMyteam).click().then(function () {
                        console.log(5);
                        return driver.wait(until.elementLocated(by.css('div[data-view="team/index"] div[class="app-tabs container-fluid page-content"] .my-teams-member-group')), 15000);
                    });
                });
            });
        });
    },

    verifyMemCaseCount: function () {
        driver.sleep(150);
        return driver.wait(until.elementLocated(page.tmDashboard_page.elements.memCaseCountLbl), 15000).then(function () {
            console.log(1);
            return driver.findElement(page.tmDashboard_page.elements.memCaseCountLbl).getText().then(function (memberCasesCount) {
                console.log('memberCasesCount : ', memberCasesCount);
                global.memberCasesCount = memberCasesCount;
                console.log('global.memberCasesCount : ', global.memberCasesCount);
            });
        });
    },

    expandUserBlock: function (User) {
        return driver.wait(until.elementLocated(page.tmDashboard_page.elements.teamMemBersBlock), 15000).then(function () {
            return helpers.gridGetElement(by.css('div.app-tabs.container-fluid.page-content'), page.tmDashboard_page.elements.teamMemBersBlock, User).then(function (memberBlock) {
                memberBlock.findElement(page.tmDashboard_page.elements.teamMemBersBlockAccord).click();
                return driver.wait(until.elementLocated(page.tmDashboard_page.elements.teamMemBersBlock), 15000).then(function () {
                    driver.sleep(3000);
                    return memberBlock.findElement(page.tmDashboard_page.elements.workerTabCaseCount).getText().then(function (caseCount) {

                        if (caseCount.includes("Case")) {
                            caseCount = caseCount.replace('Case', '').replace(' ', '');
                        } else if (caseCount.includes("Cases")) {
                            caseCount = caseCount.replace('Cases', '').replace(' ', '');
                        }

                        caseCount = parseInt(caseCount);
                        console.log('CaseCount : ', caseCount);
                        if (caseCount > 0) {
                            driver.sleep(1000);
                            return driver.wait(until.elementLocated(page.tmDashboard_page.elements.workerTabCaseBlock), 15000);
                        }
                    });
                });
            });
        });
    },

    allocateTillLastSomeUnAsgnCases: function (allocationTill, swName) {
        driver.findElement(page.tmDashboard_page.elements.homeIcon).click();
        driver.sleep(2000);

        let someFnctn = function (swName, tillCases) {
            var listWorker = null;
            var collapsiblePanel = null;
            var flag = false;
            return driver.wait(until.elementLocated(by.css('.teams-app-dashboard button.btn-info > strong')), 5000).then(function (totalUnAsgnCasesElem) {
                return totalUnAsgnCasesElem.getText().then(function (totalUnAsgnCases) {
                    if (parseInt(totalUnAsgnCases) > tillCases) {
                        return driver.wait(until.elementLocated(page.tmDashboard_page.elements.unAsgWLCaseBlockCaseName), 5000).getText().then(function (caseName) {
                            // console.log("caseName: ", caseName);
                            return driver.wait(until.elementLocated(page.tmDashboard_page.elements.clickOnAllocateButton), 8000).then(function (allocateButton) {
                                return allocateButton.click().then(function () {
                                    return driver.sleep(200);
                                }).then(function () {
                                    return driver.wait(until.elementLocated(page.tmDashboard_page.elements.unAsgWLCaseBlock), 5000).then(function (caseBlock) {
                                        return driver.wait(until.elementIsVisible(caseBlock.findElement(by.css('.panel-collapse.collapse.in'))), 5000)
                                            .then(function (collapsiblePanel) {
                                                collapsiblePanel.findElement(by.css('span.caret')).click();
                                                return collapsiblePanel;
                                            });
                                    }).then(function (collapsiblePanel) {
                                        var workerList = driver.wait(until.elementIsVisible(collapsiblePanel.findElement(by.css('ul.dropdown-menu-new'))), 5000);
                                        workerList.findElements(by.css('li')).then(function findMatchingOption(listItems) {
                                            listItems.some(function (listItem) {
                                                listItem.getText().then(function doesOptionMatch(workerName) {
                                                    if (swName === workerName) {
                                                        listWorker = listItem;
                                                    }
                                                });
                                            });
                                        }).then(function () {
                                            return driver.sleep(500).then(function () {
                                                listWorker.findElement(by.css('a')).click();
                                                return driver.sleep(500);
                                            });
                                        });
                                    });
                                }).then(function () {
                                    return driver.wait(until.elementLocated(page.tmDashboard_page.elements.allocateTick), 5000).then(function (allocateTickElem) {
                                        return driver.wait(until.elementIsVisible(allocateTickElem), 5000).then(function () {
                                            flag = true;
                                            return allocateTickElem.click();
                                        });
                                    });
                                })
                            }).then(function () {
                                if (flag) {
                                    console.log(caseName, "----is allocated to----", swName);
                                    var unAsgnCasesRem = (parseInt(totalUnAsgnCases) - 1).toString();
                                    return driver.wait(until.elementTextIs(driver.findElement(by.css('.teams-app-dashboard button.btn-info > strong')), unAsgnCasesRem), 10000).then(function () {
                                        return someFnctn(swName, tillCases);
                                    });
                                } else {
                                    assert.fail("Allocate Element not clicked.")
                                }
                            });
                        });
                    }
                });
            });
        }
        return driver.wait(until.elementLocated(page.tmDashboard_page.elements.navigationCaret), 15000).then(function (navCaret) {
            return driver.wait(until.elementIsVisible(navCaret), 3000).then(function () {
                return navCaret.click()
                    .then(function () {
                        return driver.wait(until.elementLocated(page.tmDashboard_page.elements.dropDownlinkUnassigned), 15000).then(function () {
                            driver.findElement(page.tmDashboard_page.elements.dropDownlinkUnassigned).click();
                            return driver.sleep(4000);
                        });
                    }).then(function () {
                        // comment below to stop assigned (all - allocationTill) cases to swName
                        someFnctn(swName, allocationTill).then(function () {
                            console.log("allocate function ended");
                        });
                    }).then(function () {
                        return driver.findElement(page.tmDashboard_page.elements.homeIcon).click().then(function () {
                            return driver.sleep(2000).then(function () {
                                return driver.wait(until.elementLocated(page.tmDashboard_page.elements.navigationCaret), 15000);
                            });
                        });
                    });
            });
        });
    }
} //-----main block
