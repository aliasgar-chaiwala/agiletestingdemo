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

    this.Given(/^I am on the socialcare login page$/, function () {

        //global.DEFAULT_TIMEOUT = 15 * 1000;
        var _envtemp = global.ENVIRONMENT;

        if (_envtemp.includes("local")) {
            _envtemp = 'https://localhost:8787/';
        } else {
            _envtemp = 'http://' + _envtemp + '.onesc.co.uk';

        }

        var _env = _envtemp;

        ////console.log('\nGlobal Env : ', global.ENVIRONMENT);

        return helpers.loadPage(_env, 35000).then(function () {
            // return driver.findElements(by.css('.well a[id="681d7cd9"]'));
            driver.sleep(500);
            return driver.wait(until.elementsLocated(by.css('.well a[id="681d7cd9"]')), 10000);
        });
    });

    this.Then(/^I should see manager dashboard$/, function () {

        // driver wair returns a promise so return that
        return driver.wait(until.elementsLocated(by.css('div.my-teams-member-group')), 25000).then(function () {

            // return the promise of an element to the following then.
            return driver.findElement(by.css('input.nav-search-box')).click();
        });
    });

    this.Then(/^I should be taken to team manager dashboard$/, function () {
        var _env = global.ENVIRONMENT;

        // driver wair returns a promise so return that
        return driver.wait(until.elementsLocated(by.css('div.my-teams-member-group')), 25000).then(function () {

            driver.findElement(by.css('input.nav-search-box')).click();

            return driver.getCurrentUrl().then(function (tmUrl) {
                ////console.log('tmurl : ', tmUrl);
                return expect(tmUrl).to.equal('https://' + _env + '.onesc.co.uk' + '/#team');
            });
        });
    });

    //I should see social worker dashboard

    this.Then(/^I should see social worker dashboard$/, function () {

        // driver wair returns a promise so return that
        return driver.wait(until.elementsLocated(by.css('#page-content-wrapper > div > div > div.row > div > h2')), 25000).then(function () {

            // return the promise of an element to the following then.
            return driver.findElement(by.css('input.nav-search-box')).click();
        });
    });

    this.When(/^I login to "([^"]*)" as "([^"]*)"$/, function (Team, User) {

        config = jsonfile.readFileSync('./support/' + featureConfig);

        var ID = null,
            PWD = config.PWD,
            TEAMNAME = null, USERTYPE = null;

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
                ID = config.Teams[Team][TmNo].Email;
                // console.log('\nTM ID :', ID);
                // console.log('\nTM PWD :', PWD);

                TEAMNAME = config.Teams[Team].NAME;
                //console.log('\nTEAMNAME :', TEAMNAME);

                USERTYPE = 'TM';
            }
        }
        else if (assertUserSW) {

            var SwNo = User.split("SocialWorker");
            SwNo = 'SW' + SwNo[1];
            //console.log('TmNo :', SwNo);

            if (assertTeam) {
                ID = config.Teams[Team][SwNo].Email;
                //console.log('\nSW ID :', ID);

                TEAMNAME = config.Teams[Team].NAME;
                //console.log('\nTEAMNAME :', TEAMNAME);

                USERTYPE = 'SW';
            }
        } else {
            //console.log('Error in Team name or User Name !!!');
        }
        return page.login_page.login(ID, PWD, TEAMNAME, USERTYPE);
    });

    this.Then(/^I click on home to navigate to dashboard$/, function () {

        return page.tmDashboard_page.clickHomeIcon();
    });

    this.When(/^I login as ([^"]*) on given env$/, function (User) {
        config = jsonfile.readFileSync('./support/' + featureConfig);

        var ID = null,
            PWD = config.PWD,
            TEAMNAME = null, USERTYPE = null;

        User = User.split(" ");
        ID = User[0] + "." + User[1] + "@example.com";
        console.log("USER ID : ", ID);
        return page.login_page.login(ID, PWD, TEAMNAME, USERTYPE);
    });

    this.Then(/^I close the helpme box$/, function () {

        return page.login_page.closeWalkme();
    });

    //And I logout from application
    this.Then(/^I logout from application$/, function () {

        return page.pageHead.logout();
    });

    //I navigate back in browser
    this.Then(/^I navigate back in browser$/, function () {
        return driver.navigate().back();
    });

    this.Then(/^I verify first screen of login page and select$/, function () {
        return page.login_page.verifyFirstScreen().then(function () {
            return page.login_page.clickLoginWithApplnCred();
        });
    });

    this.Then(/^I try to login with invalid credentials$/, function () {
        return page.login_page.loginWithInvalidCredentials();
    });

    this.Then(/^I enter credentials of "([^"]*)" from "([^"]*)" and refresh the page without clicking submit$/, function (user, team) {
        config = jsonfile.readFileSync('./support/' + featureConfig);

        var id = null,
            pwd = config.PWD;

        var SwNo = user.split("SocialWorker");
        SwNo = 'SW' + SwNo[1];

        id = config.Teams[team][SwNo].Email;
        return page.login_page.enterCredentials(id, pwd).then(function () {
            return page.login_page.refreshAndverify();
        })
    });

    this.Then(/^I verify first screen of login page$/, function () {
        return page.login_page.verifyFirstScreen();
    });

    this.Then(/^I copy url after login$/, function () {
        return driver.getCurrentUrl().then(function (currURL) {
            global.SW_DASHBOARD_URL = currURL;
            return driver.sleep(100);
        })
    });

    this.Then(/^I paste the url and verify$/, function () {
        return helpers.loadPage(SW_DASHBOARD_URL).then(function () {
            return page.login_page.verifyFirstScreen();
        })
    });

    this.Then(/^I enter credentials of "([^"]*)" from "([^"]*)" and check TnC checkbox behaviour$/, function (user, team) {
        config = jsonfile.readFileSync('./support/' + featureConfig);

        var id = null,
            pwd = config.PWD;

        var SwNo = user.split("SocialWorker");
        SwNo = 'SW' + SwNo[1];

        id = config.Teams[team][SwNo].Email;
        return page.login_page.enterCredentials(id, pwd).then(function () {
            return page.login_page.verifyTnCCheckBoxBehaviour();
        })
    });

    this.Then(/^I verify forgotPassword link$/, function () {
        config = jsonfile.readFileSync('./support/' + featureConfig);

        var id = config.Teams["Team1"]["SW1"].Email;
        return page.login_page.verifyForgotPassword(id);
    });
};