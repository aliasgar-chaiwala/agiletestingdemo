module.exports = function () {

    this.When(/^I search Google for "([^"]*)"$/, function (searchQuery) {
        //console.log(searchQuery);
        return helpers.loadPage('http://www.google.com').then(function () {

            // use a method on the page object which also returns a promise
            return page.googleSearch.preformSearch(searchQuery);
        });
    });

    this.Then(/^I should see some results$/, function () {

        // driver wair returns a promise so return that
        return driver.wait(until.elementsLocated(by.css('div.gsfi')), 100000).then(function () {

            // return the promise of an element to the following then.
            return driver.findElements(by.css('div.gsfi'));
        })
            .then(function (elements) {

                // verify this element has children
                expect(elements.length).to.not.equal(0);
            });
    });

    //--------------------------------------------------------------------------------------

    this.When(/^I click on "([^"]*)"$/, function (containingText) {

        var selector = 'a';
        // driver wair returns a promise so return that
        return driver.wait(until.elementsLocated(by.css(selector)), 1000).then(function () {

            // return the promise of an element to the following then.
            return driver.findElement(by.css(selector), containingText).click();
        });
    });

    // I navigate to My profile
    this.Then(/^I navigate to My profile$/, function () {
        return page.tmDashboard_page.navigateMyProfile();

    });

    //I navigate to myteamapp from dashboard

    this.Then(/^I navigate to myteamapp from dashboard$/, function () {
        return page.tmDashboard_page.navigateMyTeam();
    });

    //And I should see member count and case count
    this.Then(/^I should see member count and case count$/, function () {
        return page.tmDashboard_page.verifyMemCaseCount();
    });

    //And I expand the user block to see cases with user
    this.Then(/^I expand the "([^"]*)" block of "([^"]*)" to see cases$/, function (User, Team) {
        config = jsonfile.readFileSync('./support/' + featureConfig);

        var ID = null,
            PWD = config.PWD,
            TEAMNAME = null, USERTYPE = null;

        var assertUserTM = User.includes("TeamManager");
        var assertUserSW = User.includes("SocialWorker");
        var assertTeam = Team.includes("Team");
        //console.log('\nassertTeam :', assertTeam);
        if (assertUserTM) {
            var TmNo = User.split("TeamManager");
            TmNo = 'TM' + TmNo[1];
            //console.log('TmNo :', TmNo);

            if (assertTeam) {
                NAME = config.Teams[Team][TmNo].NAME;
                // console.log('\nTM NAME :', NAME);
            }
        }
        else if (assertUserSW) {

            var SwNo = User.split("SocialWorker");
            SwNo = 'SW' + SwNo[1];
            //console.log('TmNo :', SwNo);

            if (assertTeam) {
                NAME = config.Teams[Team][SwNo].NAME;
                //console.log('\nSW NAME :', NAME);
            }
        } else {
            console.log('Error in Team name or User Name !!!');
        }
        return page.tmDashboard_page.expandUserBlock(NAME);
    });
    //---------------------------------------------------------------------------------------    \


    this.Then(/^I should see user name of "([^"]*)" from "([^"]*)" on dashboard$/, function (User, Team) {

        var USERNAME = null;
        var assertUserTM = User.includes("TeamManager");
        var assertUserSW = User.includes("SocialWorker");
        //console.log('\nassertUser :', assertUser);

        if (assertUserTM) {
            var TmNo = User.split("TeamManager");
            TmNo = 'TM' + TmNo[1];
            //console.log('TmNo :', TmNo);


            USERNAME = config.Teams[Team][TmNo].FirstName;
            //console.log('\nTM USERNAME :', USERNAME);

        }
        else if (assertUserSW) {
            var SwNo = User.split("SocialWorker");
            SwNo = 'SW' + SwNo[1];
            //console.log('SWNo :', SwNo);

            USERNAME = config.Teams[Team][SwNo].FirstName;
            //console.log('\nSW USERNAME :', USERNAME);
        } else {
            //console.log('Error in Team name or User Name !!!');
        }

        return page.tmDashboard_page.VerifyTmDashboardName(USERNAME);

    });

    this.Then(/^I should see side pane on dashboard$/, function () {

        return page.tmDashboard_page.verifySidepaneDashboard();

    });

    this.Then(/^I verify Workload under side pane on dashboard$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return page.tmDashboard_page.verifyTmDashboardPaneWorkload();
    });

    this.Then(/^I verify Forms under side pane on dashboard$/, function () {

        return page.tmDashboard_page.verifyTmDashboardSidePaneForms();

    });

    this.Then(/^I should see Members list on page$/, function () {

        return page.tmDashboard_page.verifyTmDashboardMemberList();

    });

    this.Then(/^I navigate to cases in page and verify$/, function () {

        return page.tmDashboard_page.verifytmCasesInPage();

    });

    this.Then(/^I navigate to Approvals Requests page and verify$/, function () {

        return page.tmDashboard_page.verifytmApprovalsRequestsPage();

    });

    this.Then(/^I navigate to Unassigned Workload page and verify$/, function () {

        return page.tmDashboard_page.verifytmUnassignedWorkloadPage();

    });

    // this.Then(/^I verify unassigned workload and allocte case2 to ([^"]*)$/, function (swName) {

    //     return page.tmDashboard_page.case2Allocation(swName);

    // });

    this.Then(/^I verify unassigned workload and allocte case to "([^"]*)" of "([^"]*)"$/, { timeout: 15 * 60 * 1000 }, function (User, Team) {
        config = jsonfile.readFileSync('./support/' + featureConfig);

        var USERNAME = null,
            USERTYPE = null;

        var assertUserTM = User.includes("TeamManager");
        var assertUserSW = User.includes("SocialWorker");

        //console.log('\nassertUser :', assertUser);

        var assertTeam = Team.includes("Team");
        //console.log('\nassertTeam :', assertTeam);

        if (assertUserTM) {
            var TmNo = User.split("TeamManager");
            TmNo = 'TM' + TmNo[1];
            //console.log('TmNo :', TmNo);

            if (assertTeam) {
                USERNAME = config.Teams[Team][TmNo].NAME;
                // console.log('\nTM USERNAME :', USERNAME);                                

                USERTYPE = 'TM';
            }
        }
        else if (assertUserSW) {

            var SwNo = User.split("SocialWorker");
            SwNo = 'SW' + SwNo[1];
            //console.log('TmNo :', SwNo);

            if (assertTeam) {
                USERNAME = config.Teams[Team][SwNo].NAME;
                console.log('\nSW USERNAME :', USERNAME);

                USERTYPE = 'SW';
            }
        } else {
            console.log('Error in Team name or User Name !!!');
        }
        return page.tmDashboard_page.caseAllocation(USERNAME);

    });

    this.Then(/^I verify unassigned workload and allocte case2 to "([^"]*)" of "([^"]*)"$/, { timeout: 15 * 60 * 1000 }, function (User, Team) {
        config = jsonfile.readFileSync('./support/' + featureConfig);

        var USERNAME = null,
            USERTYPE = null;

        var assertUserTM = User.includes("TeamManager");
        var assertUserSW = User.includes("SocialWorker");

        //console.log('\nassertUser :', assertUser);

        var assertTeam = Team.includes("Team");
        //console.log('\nassertTeam :', assertTeam);

        if (assertUserTM) {
            var TmNo = User.split("TeamManager");
            TmNo = 'TM' + TmNo[1];
            //console.log('TmNo :', TmNo);

            if (assertTeam) {
                USERNAME = config.Teams[Team][TmNo].NAME;
                // console.log('\nTM USERNAME :', USERNAME);                                

                USERTYPE = 'TM';
            }
        }
        else if (assertUserSW) {

            var SwNo = User.split("SocialWorker");
            SwNo = 'SW' + SwNo[1];
            //console.log('TmNo :', SwNo);

            if (assertTeam) {
                USERNAME = config.Teams[Team][SwNo].NAME;
                //console.log('\nSW USERNAME :', USERNAME);

                USERTYPE = 'SW';
            }
        } else {
            //console.log('Error in Team name or User Name !!!');
        }
        return page.tmDashboard_page.case2Allocation(USERNAME);

    });

    this.Then(/^I verify unassigned workload and allocte case3 to "([^"]*)" of "([^"]*)"$/, { timeout: 15 * 60 * 1000 }, function (User, Team) {
        config = jsonfile.readFileSync('./support/' + featureConfig);

        var USERNAME = null,
            USERTYPE = null;

        var assertUserTM = User.includes("TeamManager");
        var assertUserSW = User.includes("SocialWorker");

        //console.log('\nassertUser :', assertUser);

        var assertTeam = Team.includes("Team");
        //console.log('\nassertTeam :', assertTeam);

        if (assertUserTM) {
            var TmNo = User.split("TeamManager");
            TmNo = 'TM' + TmNo[1];
            //console.log('TmNo :', TmNo);

            if (assertTeam) {
                USERNAME = config.Teams[Team][TmNo].NAME;
                // console.log('\nTM USERNAME :', USERNAME);                                

                USERTYPE = 'TM';
            }
        }
        else if (assertUserSW) {

            var SwNo = User.split("SocialWorker");
            SwNo = 'SW' + SwNo[1];
            //console.log('TmNo :', SwNo);

            if (assertTeam) {
                USERNAME = config.Teams[Team][SwNo].NAME;
                //console.log('\nSW USERNAME :', USERNAME);

                USERTYPE = 'SW';
            }
        } else {
            //console.log('Error in Team name or User Name !!!');
        }
        return page.tmDashboard_page.case3Allocation(USERNAME);

    });

    this.Then(/^I verify unassigned workload and allocte case1 to "([^"]*)" of "([^"]*)"$/, { timeout: 15 * 60 * 1000 }, function (User, Team) {
        config = jsonfile.readFileSync('./support/' + featureConfig);

        var USERNAME = null,
            USERTYPE = null;

        var assertUserTM = User.includes("TeamManager");
        var assertUserSW = User.includes("SocialWorker");

        //console.log('\nassertUser :', assertUser);

        var assertTeam = Team.includes("Team");
        //console.log('\nassertTeam :', assertTeam);

        if (assertUserTM) {
            var TmNo = User.split("TeamManager");
            TmNo = 'TM' + TmNo[1];
            //console.log('TmNo :', TmNo);

            if (assertTeam) {
                USERNAME = config.Teams[Team][TmNo].NAME;
                // console.log('\nTM USERNAME :', USERNAME);                                

                USERTYPE = 'TM';
            }
        }
        else if (assertUserSW) {

            var SwNo = User.split("SocialWorker");
            SwNo = 'SW' + SwNo[1];
            //console.log('TmNo :', SwNo);

            if (assertTeam) {
                USERNAME = config.Teams[Team][SwNo].NAME;
                console.log('\nSW USERNAME :', USERNAME);

                USERTYPE = 'SW';
            }
        } else {
            console.log('Error in Team name or User Name !!!');
        }
        return page.tmDashboard_page.case1Allocation(USERNAME);

    });

    this.Then(/^I cleanup unassigned Cases upto (\d+) cases to "([^"]*)" of "([^"]*)"$/, { timeout: 30 * 60 * 1000 }, function (allocationTill, User, Team) {
        config = jsonfile.readFileSync('./support/' + featureConfig);

        var USERNAME = null,
            USERTYPE = null;

        var assertUserTM = User.includes("TeamManager");
        var assertUserSW = User.includes("SocialWorker");

        //console.log('\nassertUser :', assertUser);

        var assertTeam = Team.includes("Team");
        //console.log('\nassertTeam :', assertTeam);

        if (assertUserTM) {
            var TmNo = User.split("TeamManager");
            TmNo = 'TM' + TmNo[1];
            //console.log('TmNo :', TmNo);

            if (assertTeam) {
                USERNAME = config.Teams[Team][TmNo].NAME;
                // console.log('\nTM USERNAME :', USERNAME);                                

                USERTYPE = 'TM';
            }
        }
        else if (assertUserSW) {

            var SwNo = User.split("SocialWorker");
            SwNo = 'SW' + SwNo[1];
            //console.log('TmNo :', SwNo);

            if (assertTeam) {
                USERNAME = config.Teams[Team][SwNo].NAME;
                //console.log('\nSW USERNAME :', USERNAME);

                USERTYPE = 'SW';
            }
        } else {
            //console.log('Error in Team name or User Name !!!');
        }
        return page.tmDashboard_page.allocateTillLastSomeUnAsgnCases(allocationTill, USERNAME);

    });
};